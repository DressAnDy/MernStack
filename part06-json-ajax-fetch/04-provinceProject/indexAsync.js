// promise + async await + class
//..../path/?query parameter=
const baseUrl = "https://provinces.open-api.vn/api";

class Http {
  async get(url) {
    //ai gọi get() thì ko chấm then đc ,chỉ nhận data,ko .then xử lý data tiếp đc, nên phải return
    let response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}

class Store {
  constructor() {
    this.http = new Http();
  }

  //getProvinces: lấy danh sách các thành phố
  getProvinces(code = "") {
    //code = "" là default parameter nếu ko truyền gì hết thì nó rỗng
    return this.http.get(`${baseUrl}/p/${code}`);
  }
  // getDistrictsByProvinceCode: lấy dánh sách các Quận dựa vào provinceCode
  async getDistrictsByProvinceCode(provinceCode) {
    let province = await this.http.get(`${baseUrl}/p/${provinceCode}/?depth=2`);

    return province.districts;
  }
  // getWardsByDistrictCode: lấy dánh sách các Ward dựa vào districtCode
  async getWardsByDistrictCode(districtCode) {
    let district = await this.http.get(`${baseUrl}/d/${districtCode}/?depth=2`);
    return district.wards;
  }
}

class RenderUI {
  //renderProvinces: hàm nhận vào danh sách provinces và render lên UI
  renderProvinces(provinces) {
    let htmlContent = "";
    provinces.forEach((provinceItem) => {
      const { code, name } = provinceItem; //destructuring
      htmlContent += `<option value="${code}">${name}</option>`; //nếu để = nó sẽ ghi đè lên giá trị hiện có của biến cho từng vòng lặp
    }); //còn += cho phép nối giá trị vào mới vào cuối
    //nhét vào select#province
    document.querySelector("#province").innerHTML = htmlContent;
  }
  //renderDistricts: hàm nhận vào danh sách districts và render lên UI
  renderDistricts(districts) {
    let htmlContent = "";
    districts.forEach((districtItem) => {
      const { code, name } = districtItem;
      htmlContent += `<option value="${code}">${name}</option>`;
    });
    //nhét vào select#district
    document.querySelector("#district").innerHTML = htmlContent;
  }
  //renderWards: hàm nhận vào danh sách wards và render lên UI
  renderWards(wards) {
    let htmlContent = "";
    wards.forEach((wardItem) => {
      const { code, name } = wardItem;
      htmlContent += `<option value="${code}">${name}</option>`;
    });
    //nhét vào select#ward
    document.querySelector("#ward").innerHTML = htmlContent;
  }

  renderInformation(information) {
    // const { address, district, ward, province } = information; //phân rã
    // let htmlContent = `${address}, ${ward}, ${district}, ${province}`;
    // document.querySelector("#information").innerHTML = htmlContent;

    let htmlContent = "";
    for (const key in information) {
      htmlContent += information[key] ? `${information[key]}, ` : "";
    }
    htmlContent = htmlContent.slice(0, -2); //cắt 2 kí tự cuối
    document.querySelector("#information").innerHTML = htmlContent;
  }
}

//khi code gì ở đây thì mới vô web cũng sẽ chạy nhưng viết cho chuẩn chỉ thì
//sự kiện load trang     sự kiện sau khi trang web load xong thì mới chạy
document.addEventListener("DOMContentLoaded", async (event) => {
  let store = new Store();
  let ui = new RenderUI();

  let provinces = await store.getProvinces();

  //render danh sách provinces lên ui
  ui.renderProvinces(provinces);
  //lấy provinceCode hiện tại
  let provinceCode = document.querySelector("#province").value; //.value lấy đc mã lúc render

  //dùng provinceCode getDistrictsByProvinceCode
  // store.getDistrictsByProvinceCode(provinceCode).then((districts) => {}); này lấy quận tí lấy huyện nữa sẽ bị promise hell

  //tìm quận = provinceCode
  let districts = await store.getDistrictsByProvinceCode(provinceCode);
  ui.renderDistricts(districts);
  //lấy districtCode hiện tại
  let districtCode = document.querySelector("#district").value;
  //tìm ward bằng districtCode
  let wards = await store.getWardsByDistrictCode(districtCode);
  //render wards vừa thu đc lên ui
  ui.renderWards(wards);
});

//sự province bị thay đổi                           sự kiện thay đổi giá trị là change
document
  .querySelector("#province")
  .addEventListener("change", async (event) => {
    let store = new Store();
    let ui = new RenderUI();

    //lấy provinceCode hiện tại
    let provinceCode = document.querySelector("#province").value;
    //lấy các quận = provinceCode
    let districts = await store.getDistrictsByProvinceCode(provinceCode);
    ui.renderDistricts(districts);
    //lấy districtCode hiện tại
    let districtCode = document.querySelector("#district").value;
    //tìm ward bằng districtCode
    let wards = await store.getWardsByDistrictCode(districtCode);
    //render wards vừa thu đc lên ui
    ui.renderWards(wards);
  });

//sự kiện district bị thay đổi
document
  .querySelector("#district")
  .addEventListener("change", async (event) => {
    let store = new Store();
    let ui = new RenderUI();

    //lấy districtCode hiện tại
    let districtCode = document.querySelector("#district").value;
    //tìm ward bằng districtCode
    let wards = await store.getWardsByDistrictCode(districtCode);
    //render ward vừa lấy
    ui.renderWards(wards);
  });

//khi submit đặt hàng
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let province = document.querySelector("#province option:checked").innerHTML; //vào option bị checked
  let district = document.querySelector("#district option:checked").innerHTML;
  let ward = document.querySelector("#ward option:checked")?.innerHTML; //
  let address = document.querySelector("#address").value; //input
  //làm cái hàm information
  let information = {
    //object
    address,
    ward,
    district,
    province,
  };

  //
  let ui = new RenderUI();
  ui.renderInformation(information);
  //phân rã để xài
});
let map;
let directionsService;
let directionsRenderer;

function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  const center = { lat: 21.0285, lng: 105.8542 }; // Hà Nội, Việt Nam
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: center,
  });
  directionsRenderer.setMap(map);
}

function calculateRoute() {
  const start = "Hà Nội, Việt Nam";
  const end = "Hồ Chí Minh, Việt Nam";
  const request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
      const distance = result.routes[0].legs[0].distance.text;
      document.getElementById(
        "output"
      ).innerHTML = `Khoảng cách từ ${start} đến ${end} là: ${distance}`;
    } else {
      document.getElementById("output").innerHTML =
        "Không thể tính toán khoảng cách.";
    }
  });
}

window.onload = () => {
  initMap();
  calculateRoute();
};

function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Vui lòng xác nhận rằng bạn không phải là robot.");
    return false;
  } else {
    calculateRoute(); // Gọi hàm tính toán khoảng cách
  }
}

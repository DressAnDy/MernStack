const baseURL = "https://provinces.open-api.vn/api";
//class + promise]
class Http{
    get(url){
        return fetch(url).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        }); //promise<data></data>
    } //promise <data></data>
}
//Store đảm nhận việc trích xuất dữ liệu với server
class Store{
    constructor() {
        this.http = new Http();
    }


    getProvinces(){
        return this.http.get(`${baseURL}/p`) //Promise<provinces></provinces>
         //Đường dẫn để get dc provinces
    }
    
    getDistricts(provinceCode){
        return this.http.get(`${baseURL}/p/${provinceCode}/?depth=2`).then((provinceInfo) => {
            return provinceInfo.districts;
        });
    } //promise<districts>

    getWards(districtCode){
        return this.http.get(`${baseURL}/d/${districtCode}/?depth=2`).then((districtInfo) => {
            return districtInfo.wards;
        });
    }

} //lưu trữ và trích xuất


//RenderUI: render dữ liệu len giao diện
class RenderUI {
    renderProvinces(provinces){
        let htmlContent = provinces
        .map((provinceItem) => {
            const {code, name} = provinceItem;
            return `<option value=${code}>${name}</option>`;
        })
        .join("");
        document.querySelector("#province").innerHTML = htmlContent;
    }

    renderDistricts(districts){
        let htmlContent = districts
        .map((districtItem) => {
            const {code, name} = districtItem;
            return `<option value=${code}>${name}</option>`;
        })
        .join("");
        document.querySelector("#district").innerHTML = htmlContent;
    }

    renderWards(wards){
        let htmlContent = wards
        .map((wardItem) => {
            const {code, name} = wardItem;
            return `<option value=${code}>${name}</option>`;
        })
        .join("");
        document.querySelector("#ward").innerHTML = htmlContent;
    }

    renderInformation(information){
        let htmlContent = "";
        for (const key in information) {
            htmlContent += information[key] ? `, ${information[key]}` : "";
        }
        htmlContent = htmlContent.slice(1);
        document.querySelector("#information").innerHTML = htmlContent;
    }
}
//sự kiện load trang
document.addEventListener("DOMContentLoaded", (event) => {
    let store = new Store();
    let ui = new RenderUI();
    store.getProvinces().then(provinces => {
        ui.renderProvinces(provinces);

    //lấy danh sách province từ server và hiển thị
    let provinceCode = document.querySelector("#province").value;
    //dùng provinces đi tìm danh sách các district 
    return store.getDistricts(provinceCode)
    })
    .then((districts) => {
        ui.renderDistricts(districts);
        //lấy district của district hiện tại
        let districtCode = document.querySelector("#district").value;
        //dùng districtCode tìm danh sách ward và hiển thị
        return store.getWards(districtCode)
    }).then(wards => {
     ui.renderWards(wards);
    })
});

//Sự kiện thay đổi provice
document.querySelector("#province").addEventListener("change", (event) =>{
    let store = new Store();
    let ui = new RenderUI
 
    let provinceCode = document.querySelector("#province").value;
    store.getDistricts(provinceCode)
    .then((districts) => {
        ui.renderDistricts(districts);
        //lấy district của district hiện tại
        let districtCode = document.querySelector("#district").value;
        //dùng districtCode tìm danh sách ward và hiển thị
        return store.getWards(districtCode)
    })
    .then((wards) => {
        ui.renderWards(wards);
    })
})

document.querySelector("#district").addEventListener("change", (event) => {
    let store = new Store();
    let ui = new RenderUI();
    
    let districtCode = document.querySelector("#district").value
    store.getWards(districtCode).then((wards) => {
        ui.renderWards(wards);
    })
})

//Sự kiện submit(bấm chuột vào nút đặt hàng | enter)
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let address = document.querySelector("#address").value
    let provice = document.querySelector("#province option:checked").innerHTML;
    let district = document.querySelector("#district option:checked").innerHTML;
    let ward = document.querySelector("#ward option:checked")?.innerHTML;
    let ui = new RenderUI();
    
    let information = {
        address,
        provice,
        district,
        ward,
    };
    ui.renderInformation(information);
})
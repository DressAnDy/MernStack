"use strict"
// 05-objectMethod-this-Function-hof-bind
console.log("05-objectMethod-this-Function-hof-bind");
//1.object: đối tượng
// tất cả những gì sờ được , đếm được thì là ra đối tượng
// các đối tượng (object) có thể được miêu tả = thuộc tính (prop)
// ngoài ra các đối tượng còn có hành động đặc chưng (method) - phương thức
// hàm ở ngoài thì gọi là function , hàm trong object gọi là method
let promotionBoy1 = {
    nickName: "Lê Mười Điệp", //prop
    // method
    // FD
    sayHi(){
        console.log("Ahihi quẹo lựa quẹo lựa");
    },

    //FE
    sayHi1: function(){
        console.log("Ahihi quẹo lựa quẹo lựa");
    },

    //FA
    sayHi2: () =>{
        console.log("Ahihi quẹo lựa quẹo lựa");
    },
    // bởi vì cả 3 method trên đều ko có this nên không có khác biệt
    // và trên thực tế thì FD và FE cũng ko khác nhau quá nhiều về mặt lý thuyết
    // có khác nhau về mặt kế thừa ( nhỏ xíu ) ko ảnh hưởng tới code
    // khác nhau rõ nhất là FA
    // và khi tạo method thì người ta thường dùng FD là lựa chọn ngon , hàm đầm thấm , không có khả năng bug
    // nếu phải viết function thì nên chọn FE | FA (nếu ko có this)
    // ta có thể thêm prop hay method sau khi đã tạo object
    // 
};

promotionBoy1.money = 2000;
// vừa thêm 1 cái prop vào object có sẵn, và điều này ko có ở java
promotionBoy1.chuiKhach = function(){
    console.log("Under the hood ko được thì cook");
};
// thuộc tính chứa hàm thì thành method
// dựa vào hoisting mình hoàn toàn có thể prop và prop chứ function (method)
//  vào 1 object đã tạo trước đó

// nâng cao 1 tý
// this trong method là gì ?
// (object > method > this)
let promotionBoy2 = {
    nickName: "Lê Mười Điệp", //prop
    // method
    // FD
    showName(){
        console.log("Nick name nè" + this.nickName); //this là underfined
    },

    // FE
    showName1: function(){
        console.log("Nick name nè " + this.nickName); 
    },

    showName2:() =>{
        console.log("Nick name nè " + this.nickName);
    },


};
// this chỉ có giá trị khi runtime | khi mà hàm được gọi thì this mới có giá trị
// mặc định this sẽ không được gọi
// this được xác định = object đang gọi method chứa nó
// thằng nào gọi method thì this sẽ đi thằng đó còn ko thì underfined

promotionBoy2.showName(); //FD //this là promotionBoy2 => promotionBoy2.nickName => KQ là "Lê Mười Điệp"
promotionBoy2.showName1(); //FE //giống fd
promotionBoy2.showName2(); //FA //luôn sút => this là window => window.nickName => undefined

//xác định this nằm trong hàm nào
// nếu FA => window
// còn FE và FD thì xác định ng gọi
// còn ko có thì nhìn mode
// khi viết method thì ko nên dùng FA vì nó không thích this mà trong method thì hay có this

// nâng cao 1 tý
// điều gì xảy ra nếu this nằm trong function của method trong object
// (object > method > function > this)
let promotionBoy3 = {
    nickName: "Lê Mười Điệp",
    // FD
    showName(){
        let arrow = () =>{
            console.log("NickName: " + this.nickName);
        };
        arrow();
    },

        // FD
    // showName1(){
    //     let experssion = function(){
    //         console.log("NickName: " + this.nickName);
    //     };
    //     experssion();
    // },
};
//test
// promotionBoy3.showName1(); //m:fd //lỗi ko thể đọc được thuộc tính
// this được xác định là object gọi nó 
// fe là 1 hàm giữ this lại
// nhưng trong trường hợp này , không có ai gọi hàm FE cả
// thì mình phải xét theo mode
//      "use strict"                        |                normal 
// this là undefined                        | this là window 
// underfined.nickName                      | window.nickName
// lỗi: cant read prop of undefined         | undefined   
// 

promotionBoy3.showName(); //showName là method kiểu FD và bên trong là FA
// khi thằng FA sút đi , thay vì ra thẳng window , nhưng gặp FD thì giữ lại nên
// this sẽ đại diện cho người chứa nó
// fa vô cùng ghét this , nên dù có mode nào thì cũng sút this but may mắn FA lại nằm trong m:fd 
// mà đặc chưng của m:fd là giữ this lại , vậy thì this sẽ là người gọi m:fd
// hên quá có người gọi m:fd nên có ở mode nào thì cũng là người đó
// this là promotionBoy 3 => promotion3.nickName => "Lê Mười Điệp" 

// nến cần xài 1 hàm bên trong 1 method thì nên dùng FA
// nâng cao thêm 1 tí nữa 
// this trong function của callBack nằm trong method của object thì sao

// (object > method > callback(callbackfn > this))

let promotionBoy4 = {
    nickName: "Lê Mười Điệp",
    // FD
    showName(){
        let arrow = () =>{
            console.log("NickName: " + this.nickName);
        };
        setTimeout(arrow , 3000); //thay vì gọi liền , thì đợi 3s sau mới chạy
    },

    // FD
    showName1(){
        let experssion = function(){
            console.log("NickName: " + this.nickName);
        };
        setTimeout(experssion , 3000);
    },
};

//setTimeout: xài callbackFn như đang xài ở lớp chứa nó

// nâng cao tí nữa 
let promotionBoy5 ={
    nickName: "Lê Mười Điệp",
    showName(){
        console.log("NickName nè " + this.nickName); //this rất quan trọng trong việc địa chỉ và bộ nhớ
        // nhằm xác định chính xác là ai , đại diện ai
    },
};

promotionBoy5.showName();
let promotionBoy6 = promotionBoy5;
promotionBoy5 = null;
promotionBoy6.showName();

// Phần khó nhất
// Nâng cao: HOF
//Higher order function
// 1. callback: hàm nhận vào 1 hàm làm đối số argument
// 2. closure: hàm trả về 1 hàm khác
// 3. currying: kĩ thuật chuyển đổi 1 hàm có nhiều parameter thành nhiều hàm liên tiếp có parameter

//viết hàm nhận vào 2 số , trả ra tổng của 2 số đó
let sumDemo = function(a, b){
    return a + b;
    // FE
}

// viết tắt
sumDemo = function(a, b){
    return a + b;
}

// hàm trả 1 cái hàm khác nữa
// xử lý đa lớp 
// HOF dc tạo ra từ cơ chế lưu trữ biến trong js

sumDemo = (a) =>{
    return (b) =>{
        return a + b;
    };
};

sumDemo(5)(7);

// viết tắt
sumDemo = (a) => (b) => a + b;

sumDemo(5)(7);

// HOF: có 3 khía niệm
// 1. CallBack: hàm nhận vào 1 hàm làm đối số argument - lúc này là chạy (build hàm là parameter)
// 2.  
// 3. 

const array1 = [1,2,3,4,5];
array1.forEach((val) => {
    console.log(val);
});

// 2.Closure
//   2.1 lexical scoping: (giữ và sút)  hàm con xài biến hàm cha
//   2.2 closure: hàm trả ra một hàm 
//ứng dụng: tạo ra 1 hàm , mà mỗi lần gọi nó
//thì nó trả ra một con số mới, k trùng với con số cũ
// để làm key tự tăng
const initIdentity = () => {
    let newId = 0;
    return () =>{
        return ++newId;
    }
};

console.log(initIdentity()); 
// () =>{
//     return ++newId;
// }

console.log(initIdentity()()); //1

let demoClosure = initIdentity();
// () =>{
//     return ++newId;
// }

console.log(demoClosure()); //1
console.log(demoClosure()); //2

// 3. currying: kỹ thuật chuyển đổi từ 1 function nhận vào nhiều para
// thành nhiều function liên tiếp có para

// currying là hệ quả của closure khi tách thành nhiều lớp trong 1 function
// những kĩ thuật bao gồm lexical scope

// Bài tập ứng dụng
// viết 1 hàm xử lý 3 bài toán sau
//  tìm các số từ 0 đến 10 là số lẻ
//  tìm các số từ 0 đến 10 là số chẳn 
//  tìm các số từ 0 đến 30 là số chia 3 dư 2
// callback , truyền vào hàm kiểm tra số theo yêu cầu

// let checkNumber = (a = 0 ) =>{
//     return b =>{
//         for(let i = a ; i <= b ; i++){
//             return i % 3 
//         }
//     }
// }

let handle = (end, checkNumberFn) =>{
    let result = [];
    for(let i = 0; i <= end; i++){
        if(checkNumberFn(i)) result.push(i);
    }
    return result;
}

handle(10, (number) => number % 2 != 0);
// reUse lại cấu trúc , tọa ra mảng rỗng
// call apply bind
const people = {
    print(age , location){
        console.log(this.fullname + " " + age + " " + location);
    },
};

people.print(25, "TP HCM");
// this ? people
// people.fullname => undefined

// ta có thể bỏ cong đường dẫn của this bằng call apply và bind
const diep = {fullname: "Điệp 10 điểm" };

// call nhận vào object và parameter cũ
people.print.call(diep, 25, "TP HCM");
// apply bỏ parameter cũ vào mảng
people.print.apply(diep, [25, "TP HCM"]);
//bind
people.print.bind(diep);
people.print.bind(diep, 25, "TP HCM");

// ứng dụng bind
let promotionBoy7 = {
    nickname: "Lê Mười Điệp",
    showName(){
        let experssion = function(){
            console.log(this.nickname);
        }.bind(this);
        experssion();
    },
};

promotionBoy7.showName();
// datetime
// thời gian trong js là object | dựa vào milisecond
// được tính 1/1/1970 theo chuẩn utc
// có 4 cách khởi tạo 
let a = new Date();
a = new Date("2024-8-7");
a = new Date(2024, 7, 17, 13,45,0,0);
// yy / m - 1 / d / h / m / s / sm
console.log(a); 

// getDate()        : lấy ngày trong tháng
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn

//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được

//windowObject (wo)
// là đại diện cho cửa số trình duyệt tất cả các glocal object , function, biến mà tạo bằng var
// thì đều là method | prop của wo

// ngay cả DOM(Document object model - là index.html) cũng là của window

console.log(window.innerHeight);
console.log(window.innerWidth);

setTimeout(() => {
    window.open("https://www.fb88.com/en-US", 
        "_blank", 
        "width = 500",
        "height = 700",
    );
}, 3000);

//window.location
//href = protocol + hotname / pathname

// trình duyệt cung cấp 3 loại popup
// alert("Máy tính của bạn bị nhiễm virus r");
confirm("Bạn đã dính virus , bạn muốn tải phần mềm diệt virus ko");
prompt("Are u gay" , "yes");
//01 - json - ajax - fetch.js
//json: javascript object notation
//Json là 1 chuỗi viết dưới js object
// - dùng để lưu trữ và trao đổi dữ liệu giữ các ngôn ngữ
// - có thể lưu trữ dự liệu các dạng: number, array, object, null, boolean
//không dùng chuỗi rỗng
// - có 2 thao tác chính JSON.parse , JSON.stringify
const obj1 = {
    name: "Điệp đẹp trai",
    age: 22,
    status: "Hay giận dỗi",
    study(){
        console.log("Hello");
    },
};

let myJson = JSON.stringify(obj1);
console.log(obj1);
console.log(myJson); 
//trong cơ sở dữ liệu ko có lưu method
//chỉ lưu giá trị
// cú pháp của json
// - với object thì data là cặp key và value (prop)
// - data được ngăn cách bới dấu phẩy
// - object được bao bọc bởi dấu {} 
// - còn array được bao bọc bởi []
// - string thì dc bọc bởi ""
// - key phải là string và được bọc bởi ''
// - value phải thuộc các dạng: number, string, boolean, array, object, null
// - ko lưu trữ được các function và method

let arr = ["Cam", 22, "Chuối", "ổi"];
let a = 1; //'1'
let str = "ahihi"; //'"ahihi"'
let bool = true // 'true'
console.log(JSON.stringify(str));


//AJAX: Asynchronous Javascript and XML
//AJAX là 1 thằng
//AJAX ko phải ngôn ngữ lập trình
// AJAX là kết hợp của nhìu công nghệ
// - html: giúp hiện thi dữ liệu, giao tiếp ng dùng
// - css: trang trí cho giao diện 
// - js: xử lý logic
// - xml: định dạng dữ liệu cần lưu trữ
// - Ngoài ra JSON cũng dịnh dạng lưu trữ
// - JS và DOM

//AJAX giúp chúng ta đọc dữ liệu từ server trả về
// giúp gửi dữ liệu lên server ở chế độ ngầm
// cập nhật trang web mà ko cần reset trang
// là nền tảng phát triển React, Angular, Vue
// Cách để giao tiếp với server site
// XMLHttpRequest: giao thức để mình nói chuyện với cục server rất là sai - đây là phương pháp cổ
// xưa nhất

//Fetch API: cung cấp cho mình khả năng gửi request / response thông qua trình duyệt lên server
//Fetch dùng công nghệ promise
// const baseURL = "https://66fb75a78583ac93b40bd371.mockapi.io"
//Trong hệ thống nackend của mockAPI
//thì endpoint dc quy định là resouce, collection, table


//Fetch API làm được gì
//tạo ra 1 request yếu cầu server hứa rằng sẽ trả dữ liệu về cho mình dưới dạng
//bằng cách sử dụng fetch
//fetch nhận vào 2 param fetch(url, request)
//request: method (get post put delete, patch)
 
// headers: {
//     lưu thông tin nhạy cảm
//     lưu định nghĩa tài nguyên sử dụng
// }
// body : {
//     thông tin mà em mún gửi lên server
// }

// queryString
// paramString
// fetch(`${baseURL}/user`).then((response) =>{
//     //server trả về response, nếu ok thì
//     if(response.ok){
//         //khui kiện
//         return response.json(); //biến tất cả thành Onfullfield
//     }else{
//         throw new Error(response.statusText);
//     }
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });

//demo post 1 user mới vào table users của server 

fetch(`${baseURL}/user`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "Điệp đệ quy"})
    //phải mô tả việc mình đưa ra cái gì
})
.then((response) =>{
    //server trả về response, nếu ok thì
    if(response.ok){
        //khui kiện
        return response.json(); //biến tất cả thành Onfullfield
    }else{
        throw new Error(response.statusText);
    }
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

fetch(`${baseURL}/users`,{
    method : "POST",
    headers : {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "Hùng"})
})
.then((response) => {
    if(response.ok){
        return response.json(); //biến thành Onfullfield
    }else{
        throw new Error(response.statusText);
    }
})
.then((data) => {
    console.log(data);
})
.catch(Error){
    console.log(error);
}

"use strict"
//01 - variable - hoisting - scope.js
// comment: ghi chú
console.log("Bài 1: variable - hoisting - scope");

// cách khai báo biến: 3 cách
//dùng var : xuất hiện từ phiên bản ES đầu tiên
var num = 9; 

var name1 = "Điệp đẹp trai";
console.log(name1);
name1 = "Điệp 10 điểm"; //re-assigning
console.log(name1);

//nếu khai báo mà không gán giá trị thì sao ?
var age;
// nếu không có giá trị, thì nó sẽ là undefined (rác)
// nếu biến không có giá trị thì không thể tự định nghĩa
console.log(age);

age = 10;
console.log(age);
console.log(typeof age); //number

// Quy tắc đặt tên biến
// không bắt đầu bằng số
// trong javascript có khả năng chơi với database
// giới hạn về việc đặt tên

// nguyên tắc cammelCase, underscore , PascalCase(UpperCammelCase)
// được phép dùng _(private) và dấu $(protected) ở đầu tên

var _car; //private
var $car; //protected
// mặc định của nó sẽ là public

//Hoisting với var
/*
    mốc ngược lên , kéo lên
    Hoisting là tính năng không phải bug
    Diễn ra khi dùng var
    Khi sử dụng biến và cái biến dc tạo ở dưới là var
    và tự động tạo 1 cái biến ở trên

    2 cơ chế: normal-mode , 
*/ 

console.log(msg);
var msg = "Hello";
console.log(msg);

// tùy vào chế độ code của mình mà hệ thống sẽ thông báo
// nếu dùng use strict: thì bắt buộc phải đúng cấu trúc
// chỉ xuất hiện hoisting khi đã có var ở dưới
// 

// message = "thông báo"
// console.log(message);

//let (ES6 2015) | const: hằng số
// let và const thì giống var nhưng mà không hoisting

// console.log(msg1);
// let msg1 = "Hello";
// console.log(msg1);
// dùng let vì nó không bị hoisting

// const: hằng số
// const num = 10;
// num = 12;
// đưa cái gì thì dùng cái đó làm định nghĩa lun

//const với object
const profile = {
    name: "Toàn",
    height: 160,
};
// khi new sản sinh ra 1 vùng nhớ , và phải thông qua địa chỉ
//Nếu có thay đổi thì chỉ thay đổi giá trị chứ không thay đổi địa chỉ
// Mảng Array() , Array() là object , object là con trỏ

profile.name = "Toàn cao";

// profile ={
//     name: "Toàn cao",
//     height: 160,
// } tạo ra 1 oject khác và kêu thằng object profile chuyển qua địa chỉ của object mới này
// bug

// const với array
const array1 = [1,2,3,4,5];
array1.push(6);
// khi const sẽ biến địa chỉ thành hằng số , và có thay đổi thì không sao

// array1 = [1,2,3,4,5,6]; lỗi



// lập trình hàm , thủ tục , kịch bản
// oop sẽ phát huy tối đa với lập trình game + khả năng liên kết với nhau
// 


var user_id; //database
var GoodPerson; //class
var niceCar; //biến thường


// có khả năng linh hoạt cao , tự có khả năng định dạng sau khi
// được cung cấp giá trị
// tư duy ngược với những ngôn ngữ khác
// nhưng đây cũng là cái mặt hạn chế của js (js chơi với người dùng)
// không ràng buộc đầu vào


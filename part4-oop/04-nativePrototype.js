// 04 - nativePrototype
//- thuộc tính prototype của contructor funtion dc sử dụng rộng rã
//trong js
//  function A(name){
//     this.name = name;
//  }

// function B(name){
//     this.name = name;
// }

// A.prototype = B;
// - mọi constructor function trong js đều có prototype
// - [[Prototype]] là 1 thuộc tính ẩn của object, là đại diện cho prototype thực thể
// 

// __proto__ là get và set của (accessor property) [[Prototype]]
let obj = {} //1 đối tượng không có bất cứ thuộc tính nào //Object rỗng
// obj = new Object();
console.log(obj.toString()); //[object Object]
console.log(obj.__proto__ == Object.prototype);

// Array.prototype
// Để có class thì phải:
console.log(Object.prototype); //null 
// Tiền thân của tất cả là null
console.log(obj.__proto__.__proto__);
// Đứng trên vạn vật là hư vô tức là null, nên thằng cha của Object là null
let mang1 = [1, 2, 3];
console.log(mang1.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);
console.log(mang1.__proto__.__proto__.__proto__); //null

//nếu mang1.toString() thi nó xài toString của Array hay Object
console.log(mang1.toString());

let a = 5;
// con a nó đã là object
console.log(a.__proto__ == Number.prototype); //class number








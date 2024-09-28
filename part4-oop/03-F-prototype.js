// 03-F-prototype.js
// trong js người ta thích dùng function trong class
// bên java nếu muốn tạo 1 object (bức tường)
//      thì mình cần tạo class (khuôn) => constructor(phễu)
// bên js: ta k cần class, ta chỉ cần 1 cái hàm à đúc được
// tức là function dùng để tạo object(1 cần dùng class gì cả)
// muốn tạo ra 1 chiếc xe
function Car(name, price){
    this.name = name;
    this.price = price;
    // prototype
}

let audi = new Car("audi", "2 Tỷ");
console.log(audi);


// // audi{
//     name: "audi",
//     price: "2 tỷ",
//     [[Prototype]]: Prototype của function Car => class car
// // }



// class Car{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
// }

let factory = {
    date: 2023,

}

Car.prototype = factory;


let rollroyce = new Car("RR", "1,2 Tỷ");

//js không đảm bảo constructor nếu như ta chủ động thay đổi
// prototype của constructor

// ôn lại bài trên
//F.prototype mặc định là thuộc tính của constructor function
// mỗi constructor function đều sẽ có prototype
// prototype mặc định là object chứa constructor
//      trỏ ngược lại constructor function đó 

function Animal(name){
    this.name = name;
    //prototype: class Animal
    //              constructor(name){
    //                  this.name = name
    //                      prototype: class Animal{...}              
    //            }
}

console.log(Animal.prototype);
console.log(Animal.prototype.constructor == Animal);
let dog = new Animal("Chí pủ");
console.log(dog.__proto__ == Animal.prototype); //class Animal

let newPet = new dog.constructor("Quá đã");
console.log(newPet);


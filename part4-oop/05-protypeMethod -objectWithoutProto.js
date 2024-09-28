// 05-prototype-objectWithoutProto.js
// Các phương thức 
// Chúng ta đang code ở 2024 - ai cũng biết __proto__ là gì
// xài như thế nào nhưng !!!
// Chúng ta phải xem như __proto__ đã bị loại bỏ rồi
// Không được dùng nữa, phải xài các method thay thế
// Object.getPrototype(obj)
// Object.setPrototype(obj, newProto)
// Object.create(proto, {descriptiors})
// - tạo ra object rỗng có [[Prototype]] là proto kèm với các method có bộ
// mô tả như trong param

let animal = {
    eat: true,
    //[[Prototype]]: Object.protoype => class Object
};
//Trong animal ngoài eat ra thì ta còn có [[Prototype]]
console.log(animal.__proto__ == Object.prototype);
//Vì animal dc tạo từ constructor function của Object
// nên animal.[[Prototype]] sẽ là prototype của constructor func
// mà Object.prototype == class Object
// => animal.[[Prototype]] là class Object
// => animal.__proto__ là class Object

// prototypal inheritance: kế thừa nguyên mẫu ( giữa 2 object )
let rabbitYellow = {
    jump: true,
};

rabbitYellow.__proto__ = animal;

// Cách 2:
// Object.setPrototypeOf(rabbitYellow, animal);

// Cách 3:
// let rabbitYellow = Object.create(animal);
// RabbitYellow là {} có [[Prototype]] là animal
rabbitYellow.jump = true;


//Cách 4
rabbitYellow = Object.create(animal, {
    jump: {value: true, writable: false, enumerable: false, configurable: true},
});

// Cách clone object
// Giờ ta muốn clone rabbitYellow thì sao ?
// C1: spread: ... toán tử phân rã, destructoring

let objClone = {... rabbitYellow
    // Chỉ clone dc prop bth, không check bộ cờ
}

// Cách 2
// Object.definedDescriptors
objClone = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(rabbitYellow)
);

console.log(objClone);

// C3: Object.create(proto, {descriptors})

objClone = Object.create(
    Object.getPrototypeOf(rabbitYellow),
    Object.getOwnPropertyDescriptors(rabbitYellow)
);
console.log(objClone);

//II - very plain object - object siêu phẳng | Base object
// 1. [[Prototype]] của 1 object có thể là Object, class, null, ko dc là String
let obj = {}; //tạo ra object rỗng
obj.__proto__ = "Giá trị demo";
console.log(obj);

// Object siêu phẳng - bên trong không có qq gì cả
obj = Object.create(null);
console.log(obj);
obj.__proto__ = animal;
console.log(obj);


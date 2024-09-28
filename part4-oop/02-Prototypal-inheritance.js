//02 - Prototypal - inheritance.js
// Prototypal - inheritance: kế thừa nguyên mẫu ( 2 object với nhau)
//[[Prototype]]
// trong bất cứ object nào thì cũng lun có 1 thuộc tính ảnh
// tên là [[Prototype]]
//              [[Prototype]]: là thuộc tính chứa thông tin tiền thân
//              của object đó chứa thằng tạo ra nó | cha nó
//              ta không thể .[[Prototype]] được
//              mún truy cập vào [[Prototype]] thì phải thông qua
//  accessor property có tên là __proto__
// 

let longEar = {
    ear: "long",
}

let pinkRabbit = {
    jump: true,
};

let congido = {
    eat: true,
    walk(){
        console.log("Tui chạy bộ");
    }
};

congido.__proto__ = pinkRabbit;
congido.__proto__.__proto__ = longEar;

console.log(congido);
console.log(congido.ear); //long
console.log(pinkRabbit.eat); //undefined
console.log(pinkRabbit.ear); //long

// giờ t mún congido cập nhật ear thành 'short'

// congido.ear = "short" //js sẽ không cập nhật thằng cha
// vì như thể thì ko tránh ảnh hưởng những thằng con khác
// thay vì đó nó sẽ tạo ra 1 cái ear mới
// congido total: 2 ear
// // khi nó xài thì nó ưu tiên xài ear gần
// console.log(congido.ear);
// congido.__proto__.__proto__.ear = "short";
// congido.longEar.ear = "short";
// Lưu ý với __proto__
// Trước ES6(2015) không có cách nào truy cập vào [[Prototype]]
//  Hầu hết các trình duyệt thêm vào accessor property __proto__
// __proto__ không phải cách truy cập chính thống của js
// __proto__ tính tới thời điểm hiện tại vẫn chưa bị loại bỏ
// __proto__ có thể thay thế bằng
// Object.getPrototypeOf(obj);
// Object.setPrototypeOf(obj);


// ví dụ nâng cao
// 

let student = {
    lastName: "Điệp",
    firstName: "Lê",
    get fullname(){
        return this.firstName + " " + this.lastName
    },

    set fullname(newName){
        [this.firstName, this.lastName] = newName.split(" ");
    }
};

let user  = {
    isUser : true,
    __proto__ : student,
}

console.log(user);






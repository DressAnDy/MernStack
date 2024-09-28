// 06-class-classInheritance.js
// Class là cái khuôn
//  Bên trong class có constructor là cái phễu, thuộc tính, method
//  Class sẽ dùng constructor để tạo ra đối tượng (Object)
// 
class User{
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }


    show() {
        console.log(`
            FirstName nè ${this.firstName}
            LastName nè ${this.lastName}`);
    }
}

// Tạo thử object từ class User
let diep = new User("Lê Điệp");

/*
    diep{
        firstName: "Lê",
        lastName: "Điệ",
        [[Prototype]]: User.prototype => class User
                                    constructor,

    }
*/

console.log(diep);
console.log(diep.__proto__ == User.prototype); //đi vào class User
console.log(typeof User);
console.log(User.prototype.construtor == User); //true

// CLass còn được gọi với cái tên là "syntaxtic sugar" - cú pháp kẹo đường 
//ý chỉ sự thay đổi về mặt syntax cho người mới dễ tiếp cận


// ta hoàn toàn có thể thay thế class chỉ bằng function
// ta sẽ tạo ra Student là phiên bản nhái lại class nhưng mà chỉ dùng function

function student(fname){
    [this.firstName, this.lastName] = fname.split(" ");
    this.show = function(){
        console.log(`
            FirstName nè ${this.firstName}
            LastName nè ${this.lastName}`);  
    };
}

student.prototype.show = function(){
    console.log(`
        FirstName nè ${this.firstName},
        LastName nè ${this.lastName}`);  
};


// Điểm khác nhau giữa việc tạo object từ class User và function Student
// 1. constructor function k cần dùng toán tử new
// let hung = User("Thề Hùng"); //lỗi thiếu new
// let hung = Student("Thế Hùng");
// console.log(hung); //undefined
//Student suy cho cùng cũng chỉ là function mà thôi 
// Nhưng là constructor function
//      tạo ra object
//Nếu Student xài mà k có new thì nó được hiểu là hàm bth, thiếu return => undefined

//2. Về mặt hình ảnh
console.log(User);
console.log(student);

// III - Class mà ta tạo ở trên là class declaration 
// class Experssion

let User1 = class Ahihi{
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }


    show() {
        console.log(`
            FirstName nè ${this.firstName}
            LastName nè ${this.lastName}`);
    }
}

// let tuan = new Ahihi("Cuoi Tuan"); bug
/*Biểu diễn */
// Hàm tạo ra class: 
function makeClass(){
    class Ahihi{
        constructor(fullname){
            [this.firstName, this.lastName] = fullname.split(" ");
        }
    
    
        show() {
            console.log(`
                FirstName nè ${this.firstName}
                LastName nè ${this.lastName}`);
        }
    }
    return Ahihi;
}

let User3 = makeClass();
let obj3 = new User3("Ahihi");

//*** computeName
class User5{
    firstName = "Nguyễn";
    ["show" + "Name"](){
        console.log("Hello");
        
    }   
}

//symbol 
// ôn lai oop
// ôn lại method array


class A{
    constructor(name){
        this.name = name;
    }
    showName(){
        console.log(this.name);
        
    }
}

let phi = new A("Phi");
phi.showName();



// function A(fname){
//     this.fname = fname;
// }



// class A{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         const handle = function(){
//             console.log(this.name);
//         };
//         handle;
//     }
// }


// A.prototyp.compute = function(a,b){
//     return a + b;
// }

// ban chat cua class la object, co hoisting

// cảnh giác this trong các method của class
// class Button{
//     constructor(value){
//         this.value = value;
//     }
//     click(){
//         console.log("Giá trị là" + this.value);
//         console.log(`Giá trị là ${this.value}`);
        
//     }
// }

// let btn = new Button("Ahihi");

// /*
//     btn{
//         value: "Ahihi"
//         [[Prototype]]: Button.prototype => class Button
//                                                 constructor
//                                                 click()
//     }

// */

// // btn.click();

// //Anh muốn hàm click này được chạy sau 3 giây

// // setTimeout(btn.click(),3000) //không dùng () khi dùng vì thì hàm sẽ được chạy lun
// //tuy sai về mặt logic nhưng kết quả là đúng
// //mà chạy lun thì sẽ return ra undefined
// //btn.click() được chạy lun trước cả khi 3s


// setTimeout(btn.click,3000); //
// //đúng về mặt logic nhưng khi kết quả ra thì sai
// //Vì sau 3s thì window sẽ là người chạy chứ không phải btn (không còn người gọi nữa)
// //dẫn tới this sẽ đại diện cho window mà window.click() thì auto undefined
// //truyền vào btn.click là sài đúng
// //btn.click là công thức, và sau 3s thì công thức dc lôi ra chạy


// //Để vừa chạy được, vừa ra kết quả đúng thì có 3 cách

// //C1:
// // setTimeout(() => {
// //     btn.click();
// // }, 3000);

// //C2: bind
// class Button1{
//     constructor(value){
//         this.value = value;
//     }
//     click(){
//         console.log("Giá trị là" + this.value);
//         console.log(`Giá trị là ${this.value}`);
//     }
// }

// 

// let btn1 = new Button1("Ahihi");

//Cách 3: dùng arrow
class Button2{
    constructor(value){
        this.value = value;
    }
    click = () => {
        // console.log("Giá trị là" + this.value);
        // console.log(`Giá trị là ${this.value}`);
        
    }
}

let btn2 = new Button2("Ahihi");
setTimeout(btn2.click, 3000);
// dùng arrow thì vô tinh this sẽ bị đá ra và nó sẽ xác định là những thằng
//xung quanh nó và vô tình những thằng xunh qua nó lại có btn2 => this đại diện cho
//btn 2

//II - class Inheritance: kế thừa bằng class
// trước khi có class thì chúng ta có constructor function mà thôi
//Việc kế thừa chắc chắn không phải thông qua từ khó "extends"


class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    //method
    run(speed){
        this.speed = speed;
        console.log(`${this.name} con vật này chạy với vấn tốc ${this.speed}`);
    }
    stop(speed){
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
}

let ani = new Animal("Ahihi đồ chó");

// class Rabbit extends Animal{
//     constructor(name){
//         super(name) //new animal
//         //Muốn nhận thằng con phải đã thằng cha
//     }
//     hide(){
//         console.log(`${this.name} hides!!!`);
//     }
//     stop(){
//         setTimeout(
//             () => {super.stop()}
//             , 1000)
//     }
// }

// let yellowRabbit = new Rabbit("yellowRabbit");
// yellowRabbit.hide();
// yellowRabbit.run(6);
// yellowRabbit.stop();
// ani.hide();  ko dc - tính bất hiểu 1

/*
    yellowRabbit; {
        name: "yellowRabbit",
        speed: 0.
        [[Prototype]]: Rabbit.prototype => class Animal
    }
*/
// console.log(yellowRabbit);

//class field
class Animal2{
    name = "isAnimal";
    constructor(){
        console.log(this.name);
    }
}

class Rabbit2 extends Animal2{
    name = "isRabbit";
    constructor(){
        super();
    }
}

let an2 = new Animal2(); //isAnimal
let rb2 = new Rabbit2(); //isAnimal
// class filed k kế thừa, ko có override, chí có overWrite
console.log(rb2);


//8 - static
//static: tĩnh
//trong java static nghĩa là prop thuộc về class
//instance được phép try cập và sử dụng, dùng chung
//trong js static nghĩa là prop 'chỉ' thuộc về class, instance ko được
//phép truy cập
class User9{
    name = "Điệp";
    static name2 = "Lan";
} 

// let obj = new User9();
// // console.log(obj1.name);
// console.log(obj1.name2); //underfind ( nhưng java chạy dc )
// console.log(User9.name2); //Lan 

//------
class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
}

let articleList = [
    new Article("Hoài Linh để quên 14 tỷ trong ngân hàng", new Date(2022, 3, 6)),
    new Article("Jack bán áo có chữ ký Messi để làm từ thiện", new Date(2022, 0, 6)),
    new Article("Người mua áo messi dùng tiền để từ thiện trẻ mồ côi", new Date(2022, 8, 6)),
];

articleList.shift(Article.compare); //Object không thể sort được
console.log(articleList);





//Access modifier : đây là đại diện của tính đóng gói trong OOP ở js

//trong js chỉ chia ra 2 là Internal và External interface
// Internal interface - phương thức và thuộc tính chỉ có thể được truy cập bên trong các phương thức trong class, không phải từ bên ngoài.
// External interface - phương thức và thuộc tính có thể truy cập được từ ngoài và trong class.
// Trong Javascript, có 2 loại thuộc tính và phương thức:

// Public: có thể truy cập từ bất kỳ đâu. Nghĩa là external interface. Cho đến bây giờ thì chúng ta chỉ sử dụng thuộc tính public
// Private: có thể truy cập bên trong class. Nghĩa là internal interface
// Trong nhiều ngôn ngữ khác thì còn tồn tại trường "protected": chỉ có thể truy cập bên trong class và những class kế thừa.

// Trường Protected không được quy định trong Javascript ở cấp độ ngôn ngữ, những trong thực tế để cho tiện lợi thì chúng ta có thể giả lập để quy ước với nhau.

//ReadOnly
//nếu khai báo get mà k có set, thì nó sẽ thành readOnly, không đổi giá trị đc
//nếu không có set/get thì nó tự tạo , sẽ gán bt
//các dev quy ước tên _ ở trước là private chỉ dùng trong class, nên truy cập bằng get/set
//không nên . tới
//việc quy ước này không đảm bảo được ngôn ngữ, chỉ là quy ước

class CoffeeMachine1{
    #power
    constructor(power){
        this.#power = power;
    }

    get power(){
        return this.#power;
    }
}

let cfm1 = new CoffeeMachine1(100);
cfm1.power = 1000;
// cfm.__power = 1000; //thoải mái (ng ko thích là sếp =)
console.log(cfm1.power);

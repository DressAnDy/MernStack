//02 - datatype - passByValue - passByReferences

console.log("Bài 2: kiểu dữ liệu - truyền tham trị - truyền tham chiếu");
//I-1. Primitive datatype: kiểu nguyên thủy
/*
    number: 1 , 12 , 14.6
    không dùng js để tính toán vì nó ngu lắm
    string: a , aaaa , xin chào, '1000' (đều là chuỗi hết)
    boolean: true(1) | false(0) -0 => false , - 1 => true
    các số đều là true trừ 0 và -0
    null: giá trị rỗng , nhưng biết kiểu dữ liệu
    trong js chỉ null khi có 1 object mà không đưa gì thì là object
    null ko tự nhiên có , yêu cầu cung cấp 1 object mà ko đưa gì hết thì
    là null , null là giá trị của object
    undefined: giá trị là rỗng | không có kiểu
    symbol(ES6): có khả năng tạo ra 1 chuỗi ngẫu nhiên và dùng chuỗi đó làm cái tên lun

*/

console.log(0.1 + 0.2);


//null và undefined khác nhau như nào
console.log(typeof null); //null là object, quá nhỏ để phân tách , rỗng thì đâu còn gì để phân tách
console.log(typeof undefined); //undefined

console.log(null == undefined); //true
console.log(null === undefined);
// == : so sánh giá trị (ép kiểu và unboxing nếu cần)
//=== : so sánh giá trị và kiểu false
//cái này là kiến trúc
// null được xếp là nguyên thủy vì nó là cái sơ khai nhất của code, vạn vật từ hư vô

// undefined trong paremater của function
function handle1(a,b){
    return b;
}

let c = handle1(5);
console.log(c); //undefined

//function mà ko return thì nghĩa là return undefined

// undefined trong thuộc tính của object
let tan = {
    name: "Bá Tân",
    height: 165,   
}
//oject có cơ chế hoisting cục bộ


console.log(tan.nguoiYeu);
tan.money = 1000;
console.log(tan) //undifined
//cơ chế hoisting
//dùng cách này để kế thừa được lun

// null là biết kiểu dữ liệu nhưng ko biết giá trị
// let str = ""; //gọi là chuỗi rỗng
// str = null; //gọi là rỗng (thuộc về object)
// str.concat("ahihihi");
// không dùng null vì khi mang xuống database sẽ không thể . được
// và hệ thống crash ngay

// null và undefined thì sẽ không có thuộc tính trong mặt
//lưu trữ thì ta k nên lưu null
//tránh việc xử lý vào null làm crash app

//I-2: Object datatype: khác primitive
//Plain object: object phẳng
let student = {
    name : "Tùng",
    point: 10
};
// property | entry
// key : value 
// 1 key và 1 value gọi là 1 property or entry

console.log(student.name);
console.log(student["name"]);

let flowerList = ["Huệ", "Cúc", "Lan"];
/*
    flowerList = {
        0: "Huệ"
        1: "Cúc"
        2: "Lan"
    }
*/
console.log(flowerList[1]);

// Array: là cách khai báo nhiều biến , cùng tên , cùng lúc
//không cùng kiểu

// Array là object

// không có qq gì cả , chỉ dừng lại ở nó

// regular expression: regex là Object
let regex1 = /SE\d{9}/;
console.log(typeof regex1); //object
console.log(typeof handle1); //function
console.log(handle1.prototype);

// function có typeof là Function gốc gác sâu hơn nữa là Object
console.log(10 / "d"); //NaN: not a number
//NaN là một trạng thái của nember
console.log(typeof NaN); //có kiểu là number
console.log(NaN == Number); //false: 1 thằng là trạng thái 1 thằng là kiểu
console.log(NaN == NaN); //false: trạng thái so sánh gì má =))

// tất cả các cách khai báo primitive đều có thể khai báo bằng constructor
//Wrapper Class: class bao bộc (class trai bao)

let str1 = "ahihi";
str1 = new String("ahihih");
console.log(str1); //ahihi auto-unboxing
console.log(str1 == "ahihi"); //true
console.log(str1 === "ahihi"); //false, so sánh địa chỉ mặc định false
console.log(str1.valueOf() === "ahihi"); //true: ko tự auto-unboxing thì mình tự unboxing

//dùng wrapper class để ép kiểu
let year = String(1999);
console.log(year);

// bàn riêng về boolean 
console.log(Boolean(1999)); //true
console.log(Boolean(0));  //false
console.log(Boolean("0")); //true
console.log(Boolean("")); //true
console.log(Boolean(null)); //false
console.log(Boolean({})); //true //có vùng nhớ
console.log(Boolean([])); //true
console.log(Boolean(10 / "d")); //false //trạng thái ko sở hữu giá trị
// null , undefined , trạng thái thì auto là false

console.log(Boolean(false)); //false


// Falsy: đối với js , những gì ko chứa giá trị đều là false 
//null undefined 0 -0 , false , not a number(NaN)

//Truthy: ngước lại với Falsy:
//chuỗi khác rỗng , số khác 0 và -0 , object đều là true hết lun

let a = 1;
let b = a;

a+= 2;
console.log(a, b) //a = 1 , b = 3

//vd2:
let point = 4;
//hàm sửa điểm cục cưng
function updatePoint(currentPoint){
    currentPoint = 10;
}
//xài hàm
//tham khảo thôi , ko liên kết
//
updatePoint(point);
console.log(point);

// truyền object để thay đổi

//2. pass by references: truyền tham chiếu
let boyFriend1 = {
    name: "hotGirl",
    size: "B cub",
}; //boyFriend1 trỏ đến vùng nhớ

let boyFriend2 = boyFriend1;
// 2 chàng chỏ 1 nàng , anh nay làm a kia chịu

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán = 
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
//
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
//

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)

console.log(2 == "2") //true
console.log(2 !== "2") //true
console.log(2 != "2") //false

// toán tử 3 ngôi
let diep = "đẹp trai"
let isDepTrai = diep == "đẹp trai"
console.log(isDepTrai); //true
// cơ chế pool , vì new là tạo ra 1 vùng nhớ mới nên sẽ false
//còn ở đây thì là xài 1 vùng nhớ nên có == hay === thì vẫn bằng nhau

//logical
//&& và || và !
//&& tìm false
// || tìm true

console.log(0 && 1); //0 
console.log(0 || 1 || 4); //1
console.log(0) //0
console.log(!0) //true 
// ! là ép kiểu mọi thứ về true | false
console.log(""); 
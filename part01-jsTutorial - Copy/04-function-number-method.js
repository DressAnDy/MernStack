"use strict"
// 04-function-number-method
console.log("Bài 04-function-number-method");
// Hàm trong js được chia làm 2 loại chính
// Function declaration FD | Function Expression FE
//1.Function declaration (Khai báo hàm)

function handle1(){
    console.log("Tui là hàm được tạo từ function declaration nè:");
    
}

//2.Function experssion (biểu thức hàm)

var handle1 = function(){
    console.log("Tui là hàm dc tạo từ function declaration nè")
    // không cho hoisting 
};

// handle2(); //var: lỗi handle2 not function, let: cant access before init
var handle2 = function(){
    console.log("Tui là hàm dc tạo từ Expression declaration nè")
    // không cho hoisting 
};

handle2();

//3. IIFE: immediately invokable function expression
// 

function handle3(){
    let a = 10;
    let b = 20;
    console.log(a + b);
}

;(function handle3(){
    let a = 10;
    let b = 20;
    console.log(a + b);
})();
// không có tính tái sử dụng cao vì tạo ra hàm là dùng liền
// bản chất của IIFE là phải đi cặp với thằng async await (cặp bài trùng)
// nên dùng kèm ; ở đầu

// (async function(){
//     let data = await getDataFromServer(); //lấy data đã r xuống
//     showData(data);
// })();

//CallBack: gọi lại | Hàm nhận 1 hàm làm đối số (argument)
//funct1(a, funct2) gọi là callback | funct2 gọi là callbackFunction


// let handle4 = function(){
//     console.log("Ahihi đồ chó");
// };

// setTimeout(handle4, 3000); //đợi 1 khoảng thời gian = với timeout
// // xong r mới gọi hàm đưa cho nó

// // setTimeout(function(){ 
// //     console.log("Ahihi đồ chó");
// // }, 3000);
// // // Anonymus function

// // setTimeout(() =>{
// //     console.log("Ahihi đồ chó");
// // }, 3000);

// Arrow function

//Arrow Function là cách viết tắt của function expression (FE)
// FD|FE|FA có sự khác nhau nhất định về mặt kết quả
function handle4(){
    console.log(this);
}

// FE

var handle6 = function(){
    console.log(this);
}

// FA
var handle7 = () =>{
    console.log(this);
}
// nếu dùng arrow thì nó cực kì ghét this , sút đi (bay ra ngoài), bay ra lớp ngoài cùng lun
//auto về window


// test
//                  useStrict           normal
handle4();          //undefined         window (nếu ko ai gọi thì mặc định window gọi)
handle6();          //undefined         window (same phí trên)
handle7();          //window            window (éo care qq gì cả , cứ gặp this thì sút cmn ra window)

// this được định nghĩa là người đang gọi tụi nó


// trong js , this là đại diện cho object đang gọi nó
// FD và FE sẽ giam this (tốt), có ng gọi thì đưa | nếu có cụ thể object nào gọi thì giá trị của this sẽ là
//object đó , còn nếu ko ai gọi thì this là undefined

// (normalMode thì ko ai gọi là thì window gọi)

//FA thì lun sút this ra chuồng gà (window - global)

let person1 ={
    //prop
    fullName: "Điệp đẹp trai",
    //method: function trong object - class
    //method thì gọi dùng function nữa
    getNameByFD(){
        console.log(this.fullName); //undefined
    },
    //method theo kiểu FD
    getNameByFE: function(){
        console.log(this.fullName); //undefined
    },
    getNameByFA: () =>{
        console.log(this.fullName); //undefined
    },
};
// this dại diện ng gọi nó , đại diện nó chứ không phải ng chứa nó


// let person2 = {
//     ...person1,
//     fullName: "hùng",
//     // phân rã object
// };

person1.getNameByFA(); //dù có ng gọi m thì kệ m , t vẫn sút m ra chuồng gà (window) => window.fullName => undefined
person1.getNameByFD(); //this là person1 => person1.fullName
person1.getNameByFE(); //this là person1 => person1.fullName
// ai gọi t thì t tin thằng đó

/*
lời khuyên:
    FD: ôn tính , hòa nhã , xài ở đâu cũng ko có bug 
        - nên dùng làm method trong object
    FE: cách tân của FD
        - dùng cho function bth và function có this
    FA: không nên dùng làm method (thường liên quan tới this)
        - nên dùng cho các function không this.
*/
//Phân biệt paremeter(tham số) và argrument (đối số)
function handle8(a, b = 10){
    console.log(a + b);
}

handle8(5,3);
// nó sẽ chạy 1 dòng lệnh ẩn với a = 5 và b = 3
// 5 và 3 được gọi là đối số (argument)
// a và b gọi là than số (parameter)
// b = 10 là default parameter
handle8(5);

// tham số đợi | nghỉ | rest parameter (ko phải spread)

let handle9 = function(a, b, ...c) {
    // ... nằm ở chỗ khác gọi là spread , nhưng ... nằm ở parameter thì là rest parameter
    console.log(a);
    console.log(b);
    console.log(c);
};
handle9(2,5,7,9,10);
// phần còn dư thì sẽ làm mảng và chứ thằng được chọn đặt ...
// viết hàm nhận vào 1 đống giá trị số, tính tổng của 1 đống số đó

let handle10 = (...numList)=>{
    let result = 0;
    numList.forEach((val)=> {
        result += val;
    })
    return result;
};

console.log(handle10(1,2,3,4,5,6,7)); //nhét bao nhiu tính bấy nhiêu

// Number và method của number
// không ai dùng js để làm app ngân hàng hết
// vì số trong js chỉ có dạng number thôi
// số nguyên trong js chỉ có độ chính xác là 15 số (bước sang 16 là COOK)

// let x = 99999999999999988;
// đối với số thập phân thì độ chính xác là 17
let x = (0.2 * 10 + 0.1 * 10) /10;
x = Number(0.2 + 0.1).toFixed(1);
console.log(2 + "d"); //"22"  ưu tiên cho hành động nối chuỗi
console.log(2 - "d");  //khi nhìn thấy phép gì ngoài + thì máy sẽ mặc định là phép toán nên kết quả cuối cùng là number
    // => NaN 
console.log(2 - "2"); //0 ở dạng chuỗi
console.log(2 / 0); //infinity
console.log(-2 / 0); //-infinity

x = 0o7; //o là t chuẩn bị đổi hệ octal: hệ 8
x = 0xff //hexa: hệ 16 : 255
x = 10;

// x = String(x);
// x = x + "";
x = x.toFixed(0);

console.log(x);
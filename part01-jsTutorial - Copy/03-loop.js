//03-loop
console.log("Bài 3: Loop - vòng lập");

// reUse: dùng lại , tái sử dụng                | Repeat: lập lại
// reUse: sử dụng lại một cái gì đó và khoảng thời gian sử dụng của 1 cái gì đó
// không giống nhau 
// dùng lại lúc nào cũng được, dùng ở đâu cũng được (function)


// Repeat: làm hành động đó 1 cách đều đặn , đúng về khoảng thời gian
// loop , nó lập đi lập lại liên tục, khoảng cách giữ các chương trình giống nhau
// for | do-while | while
// while được sử dụng nhiều vì có thằng boolean đi kèm

let student1 = {
    // object phẳng, không có chiều sâu
    name: "Điệp",
    point: 10,
    major: "SE",
    // property | entry
    // key      | value
};

let array1 = [12,17,19];
// array = object = con trỏ
// 0:12
// 1:17
// 2:19
// array vẫn có key: value , nhưng thay vì gọi là key thì ngta thường gọi là index
console.log(student1.name);
console.log(student1["name"]);
console.log(array1[1]); //try cập = key

// bàn về các vòng for 
// 3 cấu trúc: for do while và while
// vòng for cơ bản là vòng for duyệt từ start đến end theo yêu cầu khai báo
// 
// for(let i = 0; i i <= 5; i++)

// vòng for cải tiến : duyết đến hết , không vận hành bằng index
// for-in: đắc tính là duyệt các key của một object
for (const key in student1) {
    console.log(student1[key]);
}
// lấy ra danh sách thuộc tính trong object
//dùng ngoặc vuông

//thằng set

let demoSet = new Set(["Điệp", "Huệ", "Lan", "Huệ"]);
// Set là tập hợp loại trùng , khi loại trùng thì các phần tử không nằm đúng vị trí index(key) ban đầu
// Nên key lúc này vô dụng => set bỏ key luôn , nên trong Set ko có key 

for (const key in demoSet) {
    console.log(demoSet[key]);
}

// for-in với set sẽ không có gì cả , vì set làm gì có key mà duyệt

// đa phần các object đều có tính khả duyệt(iterable)
// có khả năng tự duyệt mà ko cần chạy for, có chiều sâu
// nhưng thường các object mà mình tự tạo ra thường sẽ ko có chiều sâu
// nên nó không có tính khả duyệt

// for-of | fore không duyệt = index và key 

// for-of duyệt value nhưng nó dùng iterable
for (const val of demoSet) {
    console.log(val);
}

// duyệt = iterable
// không chơi với object phẳng , dùng iterable

// fore: duyệt val đi kèm key
// xử lý các lần lập bằng callback
// callback

//fore(method) *******************
    array1.forEach((val , key) => {
        console.log(val, key);
    });
    
    demoSet.forEach((val , key) => {
        console.log(val, key);
    });
    // forEach: callback
    // hàm forEach nhận vào là callbackfn
    // số lần chạy = với số lần cặp key và val được cung cấp
    // khả năng duyệt hàm khác
    // forEach(callBackfc)  
    // HOF: callback | currying | lexcial scoping 
//
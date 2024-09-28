//01 - asynchronous - callback
// bản thân của js là ngôn ngữ đơn luồng
//Chạy tuyến tính từ trên xuống dưới
//js lại chạy trên web hoặc nodejs (Js runtime Enviroment)
//2 thằng này hỗ trợ đa luồng cho js (V8)

//PHP và java là đa luồng


//synchronous: đồng bộ: 
// anh có tác vụ L1(3s) và L2(2s) - 5s
//Để hoàn thành L1 và L2 thì sẽ mất 5s
//nhưng nếu L1 là nguyên nhân dẫn tới L2 thì mới hợp lý

//Nhưng nếu L1 và L2 là 2 tác vụ độc lập, thì t mún nó không càn đợi nhau nữa
//chạy cùng lúc cho nhanh
//Chỉ mất 3s

//asynchronous: bất đồng bộ, ( bất động bộ dài hơn đồng bộ)
//chạy điên cuồng
//js lun nằm trong trạng thái bất đồng bộ, việc này vừa tốt, vừa xấu

//Khi nào cần L2 đợi L1 thì mình phải chỉnh về synchronous

//call stack: là một cấu trúc dữ liệu dạng ngăn xếp (stack)
//LIFO
//
function a(x){
    console.log(x);
}

function b(y){
    a(y + 2);
}

function c(z){
    b(z + 1)
}

c(5); //8

//c(5) => z = 5
//c(5) => b(z + 1) => z + 1
//c(5) =>  b(z + 1) => y = z + 1
//c(5) =>  b(z + 1) => a(y + 2) => y + 2
//c(5) =>  b(z + 1) => a(y + 2) => x = y + 2
//c(5) =>  b(z + 1) => a(y + 2) => log(x)

// Event loop và callback queue
//Trong js runtime `enviroment`  ( môi trường chạy js) còn nhiều thứ rất quan trong
//Chứ ko chỉ có call stack
//về vùng nhớ memory    heap    callstack

//event loop: liên tục lập đi lập lại chờ đợi sự kiện "click", submit
//web APIS: DOM | AJAX(XMLHttpRequest) | timeout(setTimeo | ...)


//demo sự bất đồng bộ
function main(){
    console.log("command1");
    setTimeout(function(){
        console.log("command2");
    }, 3000);

    console.log("command3");

    setTimeout(function(){
        console.log("command4");
        
    }, 1000);   
}
main();

//asynchronous callback: xử lý bất đồng bộ bằng callback

// //  docfile("productData.txt", (data) => {
//     console.log(data);
// });

// docfile = function(urlFile, func){
//     //urlFile truy vấn file và đọc file 3s thu về data
//     func(data); //để xử lý
// };



//ưu điểm: dễ viết
//nhược điểm: khó fix bug, callback hell

//promise
// thay var xem
for(let i = 0 ; i <= 3; i++){
    setTimeout(function(){
        console.log(i);
    }, 5000);
}

// async
// setTimeout(function(){
// try{
//     throw new Error("Lỗi chà bá");
//     }catch(error){
//         console.log(error);
//     }
// }, 3000)

//runtimeError - lỗi khi vận hành | do người dùng
// gọi server giữ yêu cầu muốn get ds sinh viên
//  3s server nhận yêu cầu và get ds sinh viên
// dsSinhVien.forEach()


//  Syntax Error: sai cú pháp | do người code
// đến khi mà gõ sai 

// logicError: lỗi sai tư duy | lỗi do người code

// Tóm lại , tryCatch: dùng để xử lý lỗi phát sinh trong runtime
// nhớ rằng tryCatch không vận hành trong SyntaxError
// **Try Catch chỉ hoạt động trong moi trường đồng bộ
// môi trường đồng bộ: 
 
// js là ngôn ngữ đơn luồng nhưng đối với web thì sẽ là đa luồng
//  xử lý đa nhiệm

// đồng bộ
// try {
//     diepPiedTeam;
//     console.log("hello");
// } catch (error) {
//     console.log(error);
// }

//bất đồng bộ 
// try {
//     setTimeout(() => {
//         diepPiedTeam;
//     }, 1000);
//     console.log("hello");
// } catch (error) {
//     console.log(error);
// }

// Nên code như thế này nhé
// setTimeout(() =>{ 
// try { 
//     diepPiedTeam;
//     console.log("hello");
// } catch (error) {
//     console.log(error);
// }
// }, 1000);

// nếu không thì ở chương 6 thì có thể dùng promise.then.catch

// cấu trú của một Error trông như nào ?
// vì mình làm backend nên mình phải xử lý lỗi rất nhiều
// xử lý lỗi: "làm cho lỗi tường minh , dễ nhìn
                // dấu đi thông tin nhạy cảm"

// gõ thử "new Error" và ctrl + click xem trong đó có gì

// try { 
//     diepPiedTeam;
//     console.log("hello");
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);        
// }


// flow
// stack là prop mà mình không muốn ng dùng nhìn thấy nhất
// flow1: omit stack
//Error:                  newError
// name --->            
// message --->
// stack --->


// try { 
//     diepPiedTeam;
//     console.log("hello");
// } catch (error) {
//     let newError = {
//         ...error,
//         name = error.name,
//         message: error.message,
//         stack = "",
//     };
//     console.log(newError);
// }

// const {stack, ...newError} = error;
// console.log(Object.newError);

// flow2: custom Error
// Error:                       ErrorWithStatus extends Error
// name --->                    status
// message --->                 message
// stack --->

// mình có thể tự điều hướng về catch thông qua lệnh throw
let money = 9999999999999999;
try{
    if(money > 999999999999999){
        throw new Error("Số quá lớn với sức chứa");
    }
    console.log(money);
}catch(error){
    console.log(error);
}

// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
//
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy - 500
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

// Finally
// loading = true;
// try {
//     getData(); //hàm chưa có lỗi ==> lỗi
// } catch (error) {
//     loading = true;    
// }finally{
//     loading = false;
// }

// tạo ra một dạng lỗi mới
class ErrorWithStatus extends Error{
    constructor(status, message){
        super(message)
        this.status = status;
    }
}

try {
    throw new ErrorWithStatus("Tôi bị hack rồi")
} catch (error) {
    let newError = new ErrorWithStatus({
        status: 401, 
        message: "M là thằng gà",
    });
    console.log(newError);
    
}
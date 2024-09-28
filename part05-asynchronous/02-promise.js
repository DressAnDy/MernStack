// // 02 - promise.js


// // Promise là một lời hứa sẽ diễn ra trong tương lai
// //anh sẽ làm gì đó....
// //promise are eager not lazy (nghĩa là một lời hứa mà ko delay)
// //Một lời hứa cơ bản
// //Anh hứa sẽ đi vũng tàu và mua bánh bông lan trứng muối cho em trong tháng 10
// //          Nếu thành công : "niềm tin, 1 nụ hôn"
// //          Nếu thất bại : "1 sự thất vọng
// //Một lời hứa có 3 trạng thái và chỉ nằm 1 trong 3 trạng thái cùng 1 thời
// //điểm nào thôi

// //Pending: đang chờ kết qu , đang thực thi, đang thực hiện
// //Nếu như lời hứa mà thành công 

// //Đầu tháng 10 sếp ép ảnh phải ra Vũng Tàu công tác 2 ngày
// // => rất dễ để mua bông lan trứng muối => giữ được lời hứa
// // onFulFilled: được sạc - cái Promise sẽ dùng resolve ("1 nụ hôn")


// //Nếu xui, trời đánh, thánh vật, ảnh bệnh hết nguyên tháng 10 lun
// //thì không đi Vũng Tàu => không mua được bánh => thất hứa
// //onRejected: cái promise sẽ dùng reject("1 sự thất vọng")

// new Promise((resolve, reject) => {
    
// })

// //Tạo bối cảnh
// //--vai 1: tác nhân ngoại cảnh - chúa
// let wallet = 1000;

// //--vai 2: anh trai hứa với cô giái
// // "Anh hứa sẽ mua cho em 1 chiếc cà rá 5000$"

// let p1 = new Promise((resolve, reject) => {
//     if(wallet >= 5000){
//         resolve("1 nụ hôn");
//     }else{
//         reject("1 sự thất vọng")
//     }
// })

// // --vai3: cô gái nhận lời hứa  
// p1.then((value) =>{
//     //value chính là giá trị bên trong resolve, thành công thì
//     //then chạy
//     console.log(`Nếu code chạy vào đây, nghĩa là anh ấy đã đủ tiền mua nhẫn
//         và lời hứa đã chạm được vào resolve => code vào then
//         => value là những gì có trong resolve`);
//     console.log(value);    
// }).catch((error) => {
//     console.log(`neu code chạy vào đây thì có nghĩa là anh
//         ấy k đủ tiền thì => code đã chạm vào reject => 
//         code vào catch => error chính là những gì có trong reject`);
//         console.log(error);
        
// });
// //đã kiểm chứng r thì có thay đổi vẫn ko thay đổi
// //Lời hứa phụ thuộc vào tác nhân, thời gian
// //Lúc cô gái này kiểm chứng sẽ suy sét trên kia
// wallet = 7000;

// //Để hứa phái có điều kiện

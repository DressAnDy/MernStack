//02 - axios.js
//Axios: là 1 http client
//Một sản phẩm của 1 http request dùng để gửi request và nhận response
// 1 thư viện giúp tương tác với api như get, put, delete, patch

//axios không có sẵn trong trình duyệt, fetch thuộc về web api (tự cài đặt)
const baseURL = "https://66fb75a78583ac93b40bd371.mockapi.io"
//lấy dự liệu từ server các user trong table users = công nghệ Axios
// axios({
//     method: "GET",
//     url: `${baseURL}/user`,
// }).then((response) =>{
//     //nhận kiện hàng
//     // console.log(response);
//     if([200, 201].includes(response.status)){
//         return response.data; //nếu return sẽ ném ra ngoài và là OnFullField
//     }else{
//         throw new Error(response.statusText)
//     }
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


// axios({
//     method: "POST",
//     url: `${baseURL}/user`,
//     data:{
//         name:"Em Điệp Nguyên Tử",
//     },
// }).then((response) =>{
//     //nhận kiện hàng
//     // console.log(response);
//     if([200, 201].includes(response.status)){
//         return response.data; //nếu return sẽ ném ra ngoài và là OnFullField
//     }else{
//         throw new Error(response.statusText)
//     }
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


//dùng aliiases post
// axios.post(`${baseURL}/user`,{
//     name:"Em Điệp Nguyên Tử 1",
// })
// .then((response) => {
//     //nhận kiện hàng
//     // console.log(response);
//     if([200, 201].includes(response.status)){
//         return response.data; //nếu return sẽ ném ra ngoài và là OnFullField
//     }else{
// //         throw new Error(response.statusText)
// //     }
// // })
// // .then((data) => {
// //     console.log(data);
// // })
// // .catch((error) => {
// //     console.log(error);
// // })

// //instance: bản thể
// //Cho phép tạo ra 1 bản thể của nó nhưng có thể config
// const instance = axios.create({
//     baseURL: baseURL,
//     timeout: 10000, //sau 10s thì tự hủy request
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// instance.post(`user`, {
//             name:"Em Điệp Nguyên Tử 1",
// })
// .then((response) =>{
//     if([200, 201].includes(response.status)){
//         return response.data; //nếu return sẽ ném ra ngoài và là OnFullField
//     }else{
//         throw new Error(response.statusText)
//     }
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


//Class + instance + interceptor để cấu hình 
class Http {
    constructor(){
        this.instance = axios.create({
                baseURL: baseURL,
                timeout: 10000, //sau 10s thì tự hủy request
                headers: {
                    "Content-Type": "application/json",
                },
            });
        this.instance.interceptors.response.use(
            (response) => {
                return {
                    data: response.data,
                    status: response.status,
                };
            },
            (response) => {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    }
                )
            }
        )
    }
}

let http = new Http().instance;
http.post(`user`, {
    name: "Em Điệp nguyên tử"
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);   
});


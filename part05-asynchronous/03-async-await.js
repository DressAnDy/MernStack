//03-async-await

//ngày xưa ngta dùng callback để xử lý bất đồng bộ, để bị callback hell
//ES6: thay bằng Promise
//ES7: Async Await dùng để kết hợp với promise
//1 hàm async là 1 hàm return về Promise


function handle(){
    return Promise.resolve("ahihi");
}

//handle().then
async function handle(){
    return "ahihi";//return Promise.resolve("ahihi")
}

//await

//getProfile: hàm mô phỏng việc lên database lấy dữ liệu mất 3s
let getProfile = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name: "Điệp đẹp trai", age: 22});
        },3000)
    });
};

let getArticle = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(["Hoàng tử bé", "Nhà giả kim", "Mẹo dạy hải âu bay"]);
        },2000)
    });
};

//cách 1s: 5s
// let getData = async () => {
//     let profile = await getProfile();
//     let article = await getArticle();
//     console.log(profile,article);
// };


//cách 2: cách độc lập(3s)
// let getData = async () => {
//     let [profile,article] = new Promise.all([getProfile(), getArticle()]);

//     console.log(profile,article);
// };

// getData();

//I- xử lý lỗi
//mô phổng sever set data student nhưng thất bại
let getStudents = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("lỗi kinh hoàng");
        },3000);        
    });
};

//xử lý lỗi bằng promise
// getStudents()
//     .then(value => {
//         console.log("danh sách sinh viên" + value);
//     });
//     .catch((error) => {
//         console.log("Sever lỗi nè "+ error);
//     });

//async await thì sao
// let handle3 = async () => {
//     try{
//     let student = await getStudents();
//     console.log(student);
//     }catch(error){
//         console.log("sever bị lỗi" + error)
//     }
// };

// handle3();


//**** đừng bao giờ dùng async với toán tử đồng bộ  
//vd:

let x= 0;
let handle4 = async () => {
    x+=1;
    console.log(x);
    return 5; //return Promise.resolve(5)
};
let handle5 = async() =>{
    let tmp = await handle4();
    x+= tmp;
    console.log(x);
}
// index giong main
// nhưng mình sẽ dùng expressjs để dựng server
// thay cho http
const express = require("express");
// tạo server với express
const app = express();
const PORT = 4000;
//route

app.get("/", (req, res) =>{
    res.send("Hello")
});

app.get("/user", (req, res) => {
    res.send("User Lê Điệp đẹp trai");
})

app.listen(PORT, () =>{
    console.log(`Server express đang chạy trên PORT: ${PORT}`); 
});
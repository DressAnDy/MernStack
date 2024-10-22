// trong nodejs có http mà một module giúp mình chứa các method giúp mình tạo và thao tác với server
// module: commonjs

const http = require("http");
const PORT = 4000;

//dùng http tạo server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(`{"msg": "Ahihi Json nè"}`);
    //port giống cánh cửa, ai vào dc cánh cửa đó thì sẽ được mình cung cấp dịch vụ
});

//Server mở port 4000
server.listen(PORT, () => {
    console.log(`Server đang chạy trên PORT: ${PORT}`);   
});
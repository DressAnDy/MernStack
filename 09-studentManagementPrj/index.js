// quản lý sinh viên bằng oop
// tất nhiên là không dùng class rồi
function Student(name, birthday){
    this.name = name;
    this.birthday = birthday;
    this.id = new Date().toISOString();
}

//Khi mà mình đã tạo ra sinh viên rồi thì mình sẽ lưu và 
//LocalStore

//--------------------Store------------------------
// class Store chứa method xứ lý localStorage
function Store(){};
    //.getStudents(): hàm lấy danh sách students từ ls
Store.prototype.getStudents = function(){
    return JSON.parse(localStorage.getItem("students")) || [];
        // String dạng json
}
    //.add(student): hàm nhận vào student và thêm vào ls //chứ các method dùng để xứ lý LS
Store.prototype.add = function(student){
    // lấy danh sách students về
    let students = this.getStudents();
    // nhét student vào students
    students.push(student);
    //lưu lên lại localStorage
    localStorage.setItem("students", JSON.stringify(students));
};

//dùng student có được hiển thị lên giao diện
// ----------------------renderUI--------------------
// RenderUI là thằng chuyên các method xử lý giao diện
function RenderUI(){}
    //.add(student): nhận vào student và biến nó thành tr
    //để hiện thị table
RenderUI.prototype.add = function({id, name, birthday}){    
        // const {id, name, birthday} = student;
        //lấy students
        let store = new Store(); //instance: object từ Store
        let students = store.getStudents();
        let newTr = document.createElement("tr");
        newTr.innerHTML = `                        
                        <td>${students.length}</td>
                        <td>${name}</td>
                        <td>${birthday}</td>
                        <td>
                            <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
                            Xóa
                            </button>
                        </td> 
                        `;
    document.querySelector("tbody").appendChild(newTr);
    document.querySelector("#name").value = "";
    document.querySelector("#birthday").value = "";
};

RenderUI.prototype.alert = function(msg, type = "success"){
    let divAlert = document.createElement("div");
    divAlert.className = `alert alert-${type}`;
    divAlert.innerHTML = msg;
    document.querySelector("#notification").appendChild(divAlert);
    setTimeout(() => {
        divAlert.remove();
    }, 2000);
}

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let birthday = document.querySelector("#birthday").value;
    //dùng data thu được từ các input tạo student
    let newStudent = new Student(name, birthday);
    //lưu vào ls
    let store = new Store() //tạo instance của Store
    store.add(newStudent);
    //hiển thi ui
    let ui = new RenderUI();
    ui.add(newStudent);
    ui.alert(`Đã thêm thành công sinh viên có tên ${name}`);

});


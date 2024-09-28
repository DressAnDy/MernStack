// với mỗi business rule sẽ có chuẩn validate khác nhau
// tùy vào quốc gia, công ty mà mình validate theo chuẩn đó
// rule validate (những yêu cầu để công nhận là validate)
// email: isRequired, isEmail
// name: isRequired, isName(có thể tiếng việt, tiếng anh, max 50)
// gender: isRequired
// country: isRequired
// password: isRequired, min 8 , max 30
// confirmedPassword: isRequired, min 8 , max 30, isSame(password)
// agree: isRequired
const REG_EMAIL =
  /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
  /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

//   Viết hàm nhận vào value và kiểm tra value theo 1 tiêu chí nào đó 
// nếu value thỏa điều kiện, thì mình return ""
// nếu value không thỏa điều kiện thì return "chửi"

const isRequired = (value) => (value ? "" : "that field is required");
const isEmail = (value) => (REG_EMAIL.test(value) ? "" : "Email is invalid");
const isName = (value) => (REG_NAME.test(value) ? "" : "That name is invalid");
const min = (numberBound) => (value) => {
    return value.length >= numberBound ? "" : `Min is ${numberBound}`;

};

const max = (numberBound) => (value) => {
    return value.length <= numberBound ? "" : `Max is ${numberBound}`;

};

// 
const isSame = (paramsValue, fieldName1, fieldName2) => (value) =>{
    return value == paramsValue ? "" : `${fieldName1} is not same ${fieldName2}`
};

//ta có 1 objeparentNodect có cấu trúc như sau
/*
    value: giá trị của input càn kiểm tra
    funcs: mảng những hàm dùng để kiểm tra value | (value) => chửi
    parentNode: là div cha của controlNode để mình thêm div chửi
    controlNodes: mảng những input của value để mình tô đỏ (thêm class is-invalid)
*/

// let nameNode = document.querySelector("#name");
// let paramObject = {
//     value: nameNode.value,
//     funcs: [isRequired, isName],
//     parentNode: nameNode.parentElement,
//     controlNodes: [nameNode], //mảng 1 phần tử
// }

// viết hàm tạo ra thông báo chửi
const createMsg = (parentNode,controlNode, msg ) =>{
    // tạo div có thông điệp chửi 
    let invalidDiv = document.createElement("div");
    invalidDiv.innerHTML = msg;
    invalidDiv.className = "invalid-feedback";
    parentNode.appendChild(invalidDiv);
    // đánh đỏ những thằng input (controlNodes)
    controlNode.forEach((inputNode) =>{
        inputNode.classList.add("is-invalid");
    })
}

// hàm isValid: hàm nhận vào paramObjec, paramObject có cấu trú
// paramObject{value, func, parentNode, controlNodes}
// hàm lấy value và bỏ vào danh sách các function
// hàm duyết qua danh sách các function
//      nếu "" thì thôi
//      nếu nhận chuỗi chữi thì gọi createMasg để hiển thị
//      retruen `chửi`

// nếu duyệt hết các funcs thì k bị chửi thì return ""

const isValid = ({value, funcs, parentNode, controlNode}) => {
    //duyệt danh sách mảng các funcs và chạy cùng value
    for(const funcCheck of funcs){
        let msg = funcCheck(value);
        if(msg){
            createMsg(parentNode, controlNode, msg);
            return msg;
        }
    };
    return "";
};

// let nameNode = document.querySelector("#name");
// isValid({
//     value: nameNode.value,
//     funcs: [isRequired, isName],
//     parentNode: nameNode.parentNode(),
//     controlNode: [nameNode],
// });


//hàm xóa thông báo
const clearMsg = () =>{
    document.querySelectorAll(".is-invalid").forEach((inputNode) =>{
        inputNode.classList.remove("is-invalid");
    });

            //xóa hết các div chửi đã thêm
    document.querySelectorAll(".invalid-feedback").forEach((item) =>{
        item.remove(); //xóa lua
    });
        
};  



// hàm sự kiện diễn ra
document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault(); //chặn reset trang
    // dom đến các controlNode
    clearMsg();
    let emailNode = document.querySelector("#email");
    let nameNode = document.querySelector("#name");
    let genderNode = document.querySelector("#gender");
    let passwordNode = document.querySelector("#password");
    let confirmedPasswordNode = document.querySelector("#confirmedPassword");
    let countryNode = document.querySelector("input[name='country']:checked");
    let agreeNode = document.querySelector("input#agree:checked");

    //tiến hành valid cho từng Node
    let errorMsgs = [
    //email
    isValid({
        value: emailNode.value,
        funcs: [isRequired, isEmail],
        parentNode: emailNode.parentElement,
        controlNode: [emailNode],
    }), 

    //name
    isValid({
        value: nameNode.value,
        funcs: [isRequired, isName],
        parentNode: nameNode.parentElement,
        controlNode: [nameNode],
    }),

    // gender
    isValid({
        value: genderNode.value,
        funcs: [isRequired],
        parentNode: genderNode.parentElement,
        controlNode: [genderNode],  
    }),

    //passaword
    isValid({
        value: passwordNode.value,
        funcs: [isRequired, min(8), max(30)],
        parentNode: passwordNode.parentElement,
        controlNode: [passwordNode],  
    }),

    //confirmedPassword
    isValid({
        value: confirmedPasswordNode.value,
        funcs: [isRequired,isSame(passwordNode.value, "Confirmed Password", "Password")],
        parentNode: confirmedPasswordNode.parentElement,
        controlNode: [confirmedPasswordNode],  
    }),

    //country
    isValid({
        value: countryNode ? countryNode.value : "",
        funcs: [isRequired],
        parentNode: document.querySelector(".form-check-country").parentElement,
        controlNode: document.querySelectorAll("input[name='country']"),
    }),

    //agree
    isValid({
        value: agreeNode ? agreeNode.value : "",
        funcs: [isRequired],
        parentNode: document.querySelector("#agree").parentElement,
        controlNode: [document.querySelector("#agree")],
    }),
    ];
    console.log(errorMsgs);
    let isValidFrom = errorMsgs.every((msg) => msg == "");
    if(isValidFrom){
        alert("Form is valid");
    }
});


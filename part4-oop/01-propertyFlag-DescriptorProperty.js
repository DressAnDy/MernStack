//01 - porpertyFlag-DescriptorProperty
// porpertyFlag - DescriptorProperty - bộ cờ , bộ mô tả
/*
    - value: giá trị của property

    - writable: true thì value khả năng ghi đè, false thì ngược lại

    -enumerable: tính khả lập - có khả năng nhìn thấy được - nếu true có thể duyệt trong vòng lập

    - configurable (T): property có thể cập nhật các lá cờ, nhưng mà khi configurable mà false thì nghĩa là không thể cập hật
        được enumerable nữa
        writable thì từ T -> F được (F -> T thì ko dc)
        value thì dựa vào writable

bất cứ property nào của object cũng đều sở hữu 4 lá cờ ( 1 bộ cờ)
và có tên là propertyflag - property descriptor
*/

let profile = {
    fname: "Điệp",
    age: 18
};


// 1.Ta có thể lấy ra bộ cờ của 1 property bất kì trong object
console.log(Object.getOwnPropertyDescriptor(profile, "fname"));


// Cập nhật hoặc thêm 1 prop vào bộ cờ của nó

// configurable: true enumerable: true value : "Điệp" writable: true

Object.defineProperty(profile, "fname",{
    writable: false,
});

profile.fname = "Hùng"; //dòng này có chạy nhưng không bi gì cả//
console.log(profile);




// tạo mới thuộc tính kèm bộ cờ mô tả
Object.defineProperty(profile, "job",{
    value: "yangho",
    writable: true,
});
// những lá cờ ko liệt ke7 là false đấy

console.log(Object.getOwnPropertyDescriptor(profile, "job"));
// và với enumerable là false thì chúng ta không thể duyệt được thuộc tính này trong các vòng for
// dùng for in duyệt key
for(const key in profile){
    console.log(key);
    // kq thu được chỉ có fname và age
    // không thể thấy được job vì nó là enuberable là false
}

// II - Non configurable: không thể cấu hình

/*
    configruable: false => nghĩa là ko cho ta test giá trị của bộ cờ
            ngoại trừ writable: T -> F
            value thì dựa vào writable

ngta thường dùng configurable cho những prop đặc biệt như Math.PI
khi đã configurable: false thì không thể dùng definedProperty để fix configurable về true được nữa
    khi đã configurable: false thì:
        - 1. không thể thay đổi configurable nữa
        - 2. không thể thay đổi enumberable nữa
        - 3. không thể thay đổi writable F -> T  nữa (T -> F thì dc)
        - 4. value dựa vào writable
        - 5. không thể thay đổi getter và setter của accessor property
*/ 

// 3. Ta có thể thêm / cập nhật nhiều prop kèm bộ cờ cũng lúc
Object.defineProperties(profile, {
    point: {value: 9, writable: true},
    student_id: {value: "SE1111", writable: true},
});

// ta có thể lấy tất cả các bộ cờ của các property trong object
console.log(Object.getOwnPropertyDescriptors(profile));

// làm sao để clone được một object
// # spead: ... phân rã: clone được các prop bth ko chép được bộ cờ
// let objClone = {...profile

// }

// console.log(Object.getOwnPropertyDescriptors(objClone));

// clone thôn qua việc định nghĩa 
let objClone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(profile),
)

console.log(Object.getOwnPropertyDescriptors(objClone));

//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj)
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj)
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object)


// -----------------------------------------
// trong object có 2 loại property
// value property , accessor property
let student = {
    lastName: "Điệp",
    firstName: "Lê",
    get fullname(){
        return this.firstName + " " + this.lastName
    },

    set fullname(newName){
        [this.firstName, this.lastName] = newName.split(" ");
    }
};

console.log(student.fullname);
student.fullname = "Trà Long";
console.log(student);

// lastname: value , writable, enumberable, configurable
// fullname: get        set         enumberable     configurable

console.log(Object.getOwnPropertyDescriptors(student, "fullname"));

// III: getter và setter thông minh ứng dụng từ accessor property
// vd: cấm người code set giá trị có đồ dài bé hơn 4
student = {
    get fname() {
        return this._fname;
    },

    set fname(newName){
        if(newName.length < 4){
            alert("Name is to short");
            return;
        }else{
            this._fname = newName;
        }
    }
};

student.fname = "";







// Regex là gì
// Regex hay là regular expression | pattern | Biểu thức chính quy
// mẫu định dạng cho các chuỗi
// hơi giống like trong sql
// regex là một object
// mình dùng method .test() js | thay vì matches() java

let regex1 = /name/
console.log(regex1.test("Điệp is my name"));

regex1 = /name/i;
console.log(regex1.test("Điệp is my Name"));

// một vài method xài cùng regex
console.log(regex1.exec("Điệp is my name"));
console.log("Diệp is my Name".match(regex1));
console.log("Điệp is my Name".search(regex1));
//  replace

// II - Regex metcharacter symbols: những kí hiệu thay thế , khớp, phần này nên test
// ở trang regexr.com
// bắt đầu chuỗi ^asdasf
// kết thúc huỗi asdsf$
// trong chuỗi chí có ^asdasd%
// . là 1 ký tự bất kì ngoài trừ enter
// * lập lại từ 0 đến n
// + lập lại từ 1 đến n
// ? lập lại từ 0 -> 1
// {start, end}: tự start đến end lần
// [] hoặc \ để escape character

//III. Regex Character sets và Quatif
// charater set [...]
// except character set [^...]
// set digit [0-9]
// set alpha [A-Z] [a-z] [a-zA-Z]
// gom nhóm () hoặc |

// Short Hand
// muốn chữ và số \w \W
// muốn số \d \D
// muốn space \s \S
// a(?= n) tìm a mà kế bên là n
//a (?!n) tìm a mà kế bên k là n

// Ký tự biên \b
//  ký tự từ + ký tự biên + không phải ký tự từ
//  không phải ký tự từ + ký tự biên + không phải ký tự từ


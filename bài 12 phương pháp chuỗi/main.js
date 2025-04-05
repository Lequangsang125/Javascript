// độ dài chuỗi 
let string = "le quang sang"
console.log(string.length);

//trích xuất kí tự chuỗi
// at dùng trong phiên bản es2022
let string1 = 'le quang sang'

console.log(string.at(-3)); //index 0 là chữ l

//charAt tương tự at 
let text = "HELLO WORLD";
let char = text.charAt(0);  // Trả về 'H'
console.log(char);  // In ra 'H'

console.log(text.charAt(20));  // In ra '', vì không có ký tự ở vị trí 20


//charCodeAt trả về mã unicode tại vị trí index
console.log(string.charCodeAt(0));

// dùng [] để truy cập vào chuỗi nhưng thực tế chuỗi k phải 
// mảng mặc dù có những tính năng tương tự
console.log(string[1]);
// khi cố gắng thay đổi giá trị trong chuỗi bằng [] nó k hoạt động cũng không báo lỗi
string1[0] = 'N';
console.log(string1[20]); // undefined vì k tìm thấy 


//trích xuất phần tử chuỗi
//slice
let string2 = 'lequangsang';
console.log(string2.slice(1,2)); //e
console.log(string2.slice(1)); //equangsang
console.log(string2.slice(-1)); //g

//substring()
let text5 = "5";
let padded = text5.padStart(4,"0");
console.log(padded);









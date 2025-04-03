const person = {
    name: 'sang',
    age: 21,
    city:'Phu tho'
}

// document.getElementById('demo').innerHTML = person
let inner = person.toString() //cố gắng ép sang chuỗi nhưng không thành 
console.log(inner); // In ra '[object Object]'


//===========Khắc phục ===================

//-------------cách 1-------------------
// lấy trực tiếp value và in ra chính là cách truy cập dot trong object
//dùng khi cần lấy 1 giá trị trực tiếp từ thuộc tính 
const person1 = {
    name: 'sang',
    age: 21,
    city:'Phu tho',
}
// document.getElementById('demo').innerHTML = person1.name;
// thực tế sang đã là chuỗi rồi  nên nó k gọi toString nữa mà in ra thôi
// còn nếu nó là kiểu dữ liệu khác thì nó ép sang string
let inner1 = person1.name; 
console.log(inner1);

//-------------cách 2-------------------
// Hiển thị Thuộc tính Đối tượng trong Vòng lặp
// chính là cách truy cập Bracket để lặp vào cho nhanh đỡ chọc vào từng object
// Khi bạn không biết trước số lượng thuộc tính của đối tượng hoặc khi đối tượng có thể có nhiều thuộc tính.
//Khi bạn cần lặp qua tất cả các thuộc tính trong một đối tượng để xử lý hoặc hiển thị chúng mà không cần biết tên từng thuộc tính.
const person2 = {
    name: 'aki',
    age:20,
    city: 'phu tho'
}
let text = '';
for (let x in person2){
    text += person2[x] + " ";
}
// document.getElementById("demo").innerHTML = text;

//---------------cách 3----------------
//Object.values()tạo một mảng từ các giá trị thuộc tính:
//dùng khi Khi bạn chỉ cần mảng các giá trị trong đối tượng mà không cần biết tên thuộc tính.
const person3 = {
    name: 'aki',
    age: 21
}

const arrayPerson3 = Object.values(person3)
// document.getElementById('demo').innerHTML = arrayPerson3 // trả về giá trị dạng mảng


//-----------------cách 4 ----------------
// Sử dụng Object.entries()
const fruits = {
    banana:300,
    orange:200,
    apples:500
}
let text1 = '';
for(let [fruit, value] of Object.entries(fruits)){
    text1 += fruit + ': ' + value + '<br>'
}
// document.getElementById('demo').innerHTML = text1


//-------------cách 5 ------------
// dùng stringtify()

const person4 ={
    name: 'aki',
    age:20
}
let myString = JSON.stringify(person)
document.getElementById('demo').innerHTML = myString
console.log(myString);


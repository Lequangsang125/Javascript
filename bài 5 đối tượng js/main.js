//tạo đối tượng 
const person = {
    firstName: 'sang',
    lastName: 'le',
    age: 21
}
console.log(person);

//tạo đôí tượng rỗng rồi truyền key: value vào 
let person1 = {};
person1.name = 'sang';
console.log(person1);

//tạo bằng từ khóa new
const person2 = new Object();
person2.name = 'sangle'

console.log(person2);

//truy cập vào thuộc tính đối tượng 
const person4 = {
    firstName: 'sang',
    lastName: 'le',
    age: 21
}
console.log(person4['firstName']);
console.log(person4.firstName);

//hàm trong đối tượng 
const person5 = {
    firstName: 'sang',
    lastName: 'le',
    fullname: function(){
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person5.fullname());

//Tham chiếu trong đối tượng 
// khi bạn gán biến nào bằng đối tượng thì nó chính toàn bộ đối tượng đó
const person6 = {
    name: 'lesang',
    age: 20,
}
console.log(person6); // ở đây person 6 chưa hề thay đổi

const x  = person6;

x.age = 30 // mặc dù thay đổi thằng x 

console.log(person6); // nhưng khi log person6 cũng bị thay đổi theo x luôn









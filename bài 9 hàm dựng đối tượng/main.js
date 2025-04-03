//Hàm dựng đối tượng 
function Person(firstName, lastName, age, eye){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eye = eye;
    // giá trị mặc định của thuộc tính
    this.language = 'vietnamese'
}

const myFather = new Person('van','le',50,'black');
const myMother = new Person('sau','tong',40,'black');
const mySelf = new Person('sang','le',21,'black');
// console.log(myFather);

//thêm thuộc tính vào đối tượng 
myFather.height = '160cm'
// console.log(myFather);

//bạn không thể thêm thuộc tính vào hàm tạo đối tượng 
Person.hair = 'short'; // thêm nhưng các đối tượng tạo ra k có thuộc tính này
// console.log(myFather);

//để thêm được ta cần thêm nó vào nguyên mẫu (prototype)
Person.prototype.hair = 'short';
// console.log(myFather);

//hàm xây dựng đối tượng cũng có các method 
function Person1(firstName, lastName, age, eye){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eye = eye;
    // giá trị mặc định của thuộc tính
    this.language = 'vietnamese';
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}
const myMother1 = new Person1('sau','tong',40,'black');

// thêm 1 method mới vào đối tượng từ hàm tạo 
function Person2(firstName, lastName, age, eye){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eye = eye;
    // giá trị mặc định của thuộc tính
    this.language = 'vietnamese';
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

//thêm một phương thức vào một hàm tạo 
Person2.changeName = function (name) {
    this.lastName = name;
  }

const myMother2 = new Person2('sau','tong',40,'black');
console.log(myMother2);

// myMother2.changeName('saut') //❌ TypeError: myMother.changeName is not a function

// khắc phục thêm method vào prototype của hàm tạo
Person2.prototype.changeName = function(name){
    this.lastName = name;
}
myMother2.changeName('họ thay thế') // đã dùng được 
  
//Các hàm dựng JavaScript tích hợp 
const str1 = 'hello'; // dữ liệu string nguyên thủy
const str2 = new String('hello') // đây là 1 object 
console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === 'hello'); // true 
console.log(str2 === 'hello'); // false vì đây là object mất r

// dùng khi nào 
//1 tạo ngày tháng năm từ hàm có sẵn trong js hoặc hàm tạo
const date = new Date();
console.log(date);

//2 tạo biểu thức chính quy
//3 tạo map






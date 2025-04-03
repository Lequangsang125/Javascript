//3 cách truy cập vào thuộc tính 
const person = {
    "full Name" : 'le sang',
    1: 'ok',
    name: 'sang',
    age: 20
}

//cách 1
console.log(person.age); //20


//cách 2
console.log(person["full Name"]); //20

//cách 3  Bracket  dùng khi key không xác định 
// ví dụ: khi người dùng muốn xem tên chỉ cần gán lại tên vào biến 
// nếu dùng cách 1 và 2 ta cần truy cập toàn bộ thuộc tính viết mỗi dòng 1 thuộc tính 
// cách 3 tối ưu vì ta không cần viết lại truy cập cứng mà linh hoạt thay đổi
//đặt tên  thuộc tính vào 1 biến
let property = 'full Name';
//truy cập vào thuộc tính đó
let name = person[property]
console.log(name);


//-------------- ví dụ 3 cách ------------------
//cách 1 - 2 
const person1 = {
    name: 'aki',
    address: 'Phu tho',
    age: 21
}

console.log(person1.name);
console.log(person1.address);
console.log(person1.age);

//cách 3 
//với vòng lặp 
for(let key in person1){
    console.log(`${key}: ${person1[key]}`);
}
//Ứng dụng thực tế khi nào?
//1 Nhập liệu từ người dùng
let userChoice = prompt('Bạn muốn xem thuộc tính nào? (name,address,age)');
console.log(person1[userChoice]);
//2 Xử lý dữ liệu động từ API
let apiResponse = {
    id: 1,
    title: 'javascript',
    views: 1000
}
let toShow = 'title';
console.log(apiResponse[toShow]);

//3 Truy cập thuộc tính có tên phức tạp
let obj = { "first-name": "John" };
let prop = "first-name";
console.log(obj[prop]); // "John" (không thể dùng obj.first-name)

//=====================Thêm,xóa, cập nhật thuộc tính mới =================
const person2 = {
    name: 'lesang'
}

person2.age = 20
console.log(person2);

//xóa thuộc tính 
delete person2.age
console.log(person2);

//cập nhật thuộc tính 
person2.name = 'aki';
console.log(person2);


//======đối tượng lồng nhau ======
const aki1 = {
    name: 'aki1',
    age:20,
    aki2: {
        name: 'aki2',
        age: 21
    }
}

//truy cập
//cách1 
console.log(aki1.aki2.name); // aki2 
console.log(aki1['aki2'].name); // aki2 
console.log(aki1['aki2']['name']); // aki2 







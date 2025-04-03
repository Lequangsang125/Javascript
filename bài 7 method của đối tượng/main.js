// truy cập vào hàm trong đối tượng 
const person = {
    firstName : 'sang',
    lastName: 'le',
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

//truy cập 
console.log(person.fullName());
//thêm hàm vào đối tượng 
person.age = function(){
    return 20
}
console.log(person.age()); //20

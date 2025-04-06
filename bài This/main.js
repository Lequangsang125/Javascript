const user = {
    name: 'Linh',
    greet: function(){
        return "hello" + this.name;
    }
};

const guest = {
    name: 'khach'
}

console.log(user.greet.call(guest));
//apply
function showInfo(job,age){
    return `${this.name} - ${job} - ${age}`;
}
const person = {
    name: 'hà'
};

console.log(showInfo.apply(person,['dev',28]));

//bind
const animal = {
    sound: "gau",
    speak(){
        return this.sound
    }
}
const cat = {
    sound: "meo"
}

const catspeak = animal.speak
//singleton
//Object.create

//object literals
const mysym = Symbol("key1")

const jsuser= {
    name:"hitesh",
    age:18,
    [mysym]:"mykey1",
    location:"jaipur",
    email:"Ankit@gmail.com",
    isLoggedIn: false,
    lastLoginDys:["monday","saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log([mysym]);

console.log(typeof mysym);     // symbol
console.log(typeof [mysym]);   // object

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
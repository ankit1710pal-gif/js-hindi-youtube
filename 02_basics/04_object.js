// singleton object
// const tinderUser = new Object()

// non-singleton object
const tinderUser = {}

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

//console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// combine objects
const obj3 = Object.assign({}, obj1, obj2);

//console.log(obj3);

// console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

//console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));


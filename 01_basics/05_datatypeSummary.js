// Primitive
// 7 Types: String ,Number ,Boolean ,null ,undefined ,BigInt ,Symbol

const score=100;
const scoreValue=100.2
const logIn=true
const outsideTemp=null

let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);


//Reference (Non-Primitive)
//Array ,Object ,Functions

const heroes=["Saktiman", "Naagraj", "Doga"]
let myObj={
    name:"Priyansh",
    age:23
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

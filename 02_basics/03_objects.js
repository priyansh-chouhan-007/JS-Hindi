//! Literals

const mySym=Symbol("key1")
const jsUser={
    name:"Priyansh",
    "full Name":"Priyansh Chouhan",
    mySym:"myKey",//! It will not work as Symbol
    [mySym]:"myKey1",//! So we make use of "[]"
    age:22,
    location:"Bhopal",
    email:"priyansh@google.com",
    isLoggedIn:false,
    loginDays:["Monday","Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);//! Special case for Interview
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);//! it will Return String as a datatype
// console.log( jsUser[mySym]);

// jsUser.email="priyansh@54gamil.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email="priyansh@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello Java Script");
}
// console.log(jsUser.greeting);
console.log(jsUser.greeting());
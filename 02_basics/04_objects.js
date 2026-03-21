const tinderUser={}
tinderUser.id="Hello@123"
tinderUser.name="Priyansh"
tinderUser.password="@123"
tinderUser.isLoggedIn=false
// // console.log(tinderUser);

// const regularUSer={
//     email:"priyansh12@gmail.com",
//     fullname: {
//         userFullName:{
//             firstName:"Priyansh",
//             lastName:"Chouhan"
//         }
//     }
// }
// console.log(regularUSer);
// console.log(regularUSer.fullname);
// console.log(regularUSer.fullname.userFullName);

const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
const obj3={5:"A",6:"B"}

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



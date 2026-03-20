const marvel_Heroes=["Thor","Ironman","Spiderman"]
const dc_Heroes=["Flash","Superman","Batman"]
// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes);

//! To join array we make use of Concat
// const allHeroes=marvel_Heroes.concat(dc_Heroes)
// console.log(allHeroes);

//! Spread Operator (...)
// const all_Heroes=[...marvel_Heroes,...dc_Heroes]
// console.log(all_Heroes);

//! Flat
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realNumber=another_array.flat(Infinity)
// console.log(realNumber);

console.log(Array.isArray("Priyansh"));
console.log(Array.from("Priyansh"));
console.log(Array.from({name:"Priyansh"}));//intersting case for interview



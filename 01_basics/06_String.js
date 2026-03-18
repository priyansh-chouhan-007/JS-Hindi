const naam="Priyansh"
const age=23

console.log(naam + age);
console.log(`My name is ${naam} and my age is ${age}`);

console.log(naam.length);
console.log(naam.toUpperCase());

const newString=naam.substring(0,5)
console.log(newString);

const anotherString=naam.slice(-8,-5)
console.log(anotherString);

const url="https://Priyansh.com/Priyansh%20Chouhan"
console.log(url.replace('%20','-'));

console.log(url.includes('Priyansh'));

const str="The quick brown fox jumps over the lazy dog"
const word=str.split(" ")
console.log(word);

console.log(word[5]);

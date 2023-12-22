// string creation::

let str="SUSANTA MAITY";    

console.log(str);
console.log("length=",str.length);
console.log(str[6]);
// string is immutable .. we dont change the actual string ..


// Templete litarals in js==> special string
/* A way to have embaded expression in strings*/

let sentence=`This is a template literals`;
console.log(sentence);



let obj={
    item:"pen",
    price:10
}

// printing

console.log("the cost of",obj["item"],"is",obj["price"],"rupees.");

let output= `the cost of ${obj.item} is ${obj.price} ruppes`;
console.log(output);

// string methods

// these are built in function to manipulate a string

//  str.toUpperCase()

console.log(str.toUpperCase());


// str.toLowerCase()

console.log(str.toLocaleLowerCase());


// remove whaitespaces starting and last position using the trim methods
let str1= "    Susanta   maity   ";
console.log(str1.trim());


//slice methods / returns part of string

let str2="Sreya das";
console.log(str2.slice(0,6));
console.log(str2.slice(0));

// string concatenation method
let str3="Susanta";
let str4="Maity";

console.log(str3.concat(str4));

// repalce any word
let str5="Hello";
console.log(str5);
console.log(str5.replaceAll("He","Ye"));

// string charAt method ==> to iterate the index value

let str6="Sreya Das";

console.log(str6.charAt(1));



// practice set 

let userName=prompt("Enter your full name::");
console.log("Your website Id=","@"+userName+userName.length);


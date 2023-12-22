console.log("This file is contain all operators and condition statement....");

// Arithmatic Operator

let a=34;
let b=6;
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);

console.log(++a);
console.log(--a);


// Unary Operator

let x=9;
++x;
console.log(x);

// comparison Operator

//  equal to "=="  , equal to & type "==="
// Not equal to "!=" , Not equal to & type "!=="
// greter then ">"  , lesser then "<" , greater than equal ">=" , lesser than equal "<="


// conditional statement

let y=16;
if(y>18)
{
    console.log("you can vote");
}

if(y<18)
{
    console.log("You cannot vote");
}



let age=18;
age>18 ? console.log("Adult") :console.log("NotAdult") ;
let res=age>18 ? "Adult" : "Not Adult";
console.log(res);

//alert("Hello");

// practice set 1::->
let n=prompt("Enter the Number::");

let result=n%5==0 ? "Multiple of 5" :"Not Multiply of 5";
console.log(n ,"is ", result);

// practice set 2::->

let marks=prompt("pls enter the marks::");
if(marks>=80 && marks<=100)
{
    console.log("A");
}
else if(marks>=70 && marks<=89)
{
    console.log("B");
}
else if(marks>=60 && marks<=69)
{
    console.log("C");
}
else if(marks>=50 && marks<=59)
{
    console.log("D");
}
else if(marks>=0 && marks<=49)
{
    console.log("F");
}


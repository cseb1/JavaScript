// this file contain the different type loop

console.log("Susanta , in this file contain all type loop concept...");


// for loop

// Qs. print your name five time using for loop

for (let i = 0; i <=5; i++) {
    console.log("Susanta Maity");
    
}


// while loop

// Qs. print all the number in between 1 to 10 using while loop

let i=1; // initialization 
while(i<=10)
{
    console.log(i); // printing value
    i++; // updation
}

// do-while loop
//Qs. print all the number in between 1 to 5 using do-while loop
// note:  Atleast one time run the do-while loop either the condition is false.
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);


// Advanced loop--> 
// for of loop==>> used in array and string to travarse each letter or digit..


// Qs. suppose give any string as your wish you traverse the all letter


let name= "Susanta";
let count=0;
for (let k of name) {
    console.log(k);
    count++;
}

console.log("Total letter is ==",count);




// for in loop ==> used in traverse all the key value in object..

//Qs. let create a object of student and traverse all the key value using for in loop


let student={
    name: "Susanta Maity",
    age:24,
    year:"3rd year",
    cgpa:8.78,
};


for (const key in student) {
    console.log("Key:",key ,"value:",student[key]);
}




// Some practice question

// pactice question 1::


// print all even number in between 1 to 100..
    console.log("All even number of 1 to 100 is given below::");
    let c=0;
    for(let i=1;i<=100;i++)
    {   
       if(i%2==0)
       {
         console.log(i);
         c++;
       }
    }
console.log("Total even number is=",c);


// practice question 2::

let gameNum=25;

let userNum=prompt("Enter the guess number::");

while(gameNum!=userNum)
{
    userNum=prompt("You entered wrong no . plz enter again..");
}

console.log("Congratulation ....")
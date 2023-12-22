
// this file contain arrays and her methods

let marks=[54,35,47,86,90];
console.log(marks);
console.log("lenght of the marks array is=",marks.length);
// show any index value

console.log("0th index marks value is=",marks[0]);


// Looping over an array
// using a for loop
let friends=["Susanta","Sayan","Anjan","Mirza","Soumili","Sreya"];
for(let i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}


// printing using for of loop
console.log("Printing all friends using for of loop::")
for (const friend of friends) {
    console.log(friend);
}

// practice set 1::
// suppose one array contain the 5 student marks and find the average marks;;;

let student_marks=[85,97,44,37,76,60];
let marks_sum=0;
for(let i=0;i<student_marks.length;i++)
{
    marks_sum+=student_marks[i];
}

let average_marks=marks_sum/student_marks.length;
console.log("Average marks=",average_marks);

// practice set 2::

let array=[250,645,300,900,50];
for(let i=0;i<array.length;i++)
{
    array[i]=array[i]-(array[i]*0.1);
}

console.log(array);

// array methods

/* push method :: push(): add to end
   pop():delete from end & return
   toString(): convert the array to String
   */


   let food=["Potato","Apple","Litchi","Chips","Alcohal"];
   food.push("Royal Stag 750ml");
   console.log(food);

   // pop() method

   console.log("Removed item is=",food.pop());
   console.log(food);


   // toString() methods

   console.log(food.toString());


   // concat method
let party_item=["750ml royal stag","old monk 750"];
let foods_party=food.concat(party_item);

   console.log(foods_party);


   // unshift()methods --> add first index value

   food.unshift("Onion","tea","cigarate");
   console.log(food);

   // shift() methods --> delete first item

   
   console.log(food.shift());

// slice() method
// returns a piece of the array
console.log(food.slice(0,3));


// splice() method change original array(add,remove,replace);
// splice(startIdx, delCount, newEli);


let elements=[1,2,3,4,5,6,7];
console.log("Original element array is=",elements);
elements.splice(2,2,101,102);
console.log(elements);


// practice set 3


let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Original array is=",companies);
// remove the first company of the array
companies.shift();
// Remove uber & add Ola in its place
companies.splice(1,2,"Ola");
// Add Amazone at the end
companies.push("Amazone");
console.log("Updating array will be=",companies);


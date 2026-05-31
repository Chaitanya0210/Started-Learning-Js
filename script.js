//This prints 
console.log("Hello Chaitanya");
console.log("Google");

age=21;
age+10;

console.log(age);

name="Chaitanya Rayewar";
console.log(name);

const product = {
    productName : "pen",
    rating : 4,
    Review : 7002,
    currentPrice : 270,
    MRP : 285,
};

console.log(product);


//This  is an object
const profile ={
    fullName: "Chaitanya Rayewar",
    posts: 195,
    followers: 569,
    following: 4,
};

console.log(profile);

let a=5;
let b=2;

console.log("a+b = " ,a+b);
console.log("a-b = " ,a-b);
console.log("a*b = " ,a*b);
console.log("a/b = " ,a/b);
console.log("a%b = " ,a%b);
console.log("a**b = " ,a**b);
console.log("++a = " ,++a);
console.log("--b = " ,--b);

//Assignment operator

a -= 2;
b += 1;
console.log(a,b);


//comparison operator

a=5;
b=2;
console.log("a==b", a==b);//False
console.log("a!=b", a!=b);//True
 
a=5;
b="5";
console.log("a==b", a==b);//True
console.log("a===b", a===b);//false
console.log("a!==b", a!==b);//True


//Taking input

let num=prompt("Enter a Number ");

if(num%5==0){
    console.log("True");
}
else{
    console.log("false");
}


//writing Grades of students

let score=prompt("Enter Your Score: ");
if(score>=90 && score <=100){
    console.log("A");
}
else if(score>=70 && score <=89){
    console.log("B");
}

else if(score>=60 && score <=69){
    console.log("C");
}
else if(score>=50 && score <=59){
    console.log("D");
}

else if(score<50){
    console.log("F");
}

else{
    console.log("Not a Valid Score");
}


//Loops

for(let i=0;i<10;i++){
    console.log("hello");
}

let sum=0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}

console.log(sum);


for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


let random = 9;
let input;

do {
    input = prompt("Enter game number:");
} while (Number(input) !== random);

console.log("Congratulations! You guessed the number:", random);

//Template Literal

let specialstr=`This is Template Literal`;
console.log(specialstr);


//Strings

let fName=prompt("Enter Your Full Name: ");
let userName="@"+fName+fName.length;
console.log(userName);
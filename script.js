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


//Arrays

let marks =[85,97,44,37,76,60];
let avg=0;
for(let el of marks){
    avg+=el;
}

console.log(avg/marks.length);

let prices=[250,645,300,900,50];
for(let i=0;i<prices.length;i++){
    prices[i]=(prices[i]/10)*9;
}

console.log(prices);

let companies=["Bloomberg", "Microsoft", "Uber" , "Google" , "IBM" , "Netflix"];

companies.splice(0,1);
companies.splice(1,1,"ola");
companies.push("Amazon");

console.log(companies);

//functions

function sumi(x,y){
    return x+y;
}

let value=sumi(3,4);

console.log(value);


function vowels(s){
    s=s.toLowerCase();
    let cnt=0;
    for(let char of s){
        if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
            cnt++;
        }
    }
    return cnt;
}

let ans=vowels("chaitanya");
console.log(ans);

const arrow = (s) =>{
   s= s.toUpperCase();
    let cnt=0;
    for(let char of s){
        if(char==='A' || char==='E' || char==='I' || char==='O' || char==='U'){
            cnt++;
        }
    }
    return cnt;
}

let arans=arrow("ChaitanyA");
console.log(arans);

//for each loop

let arri=[1,2,3,4,5,6,7];

arri.forEach((val)=>{
    console.log(val*val);
});
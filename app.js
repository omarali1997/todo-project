// prompt("enter your name");
// prompt("enter your gender");

// alert("welcome");




var userName = prompt("enter your name")
console.log(userName);

var useGender = prompt("enter your gender(male , female)")
console.log(useGender);


var userAge = prompt("enter your age");
if (userAge <= 0){
    alert("you enter wrong age please enter again")
    userAge = prompt("enter your age");
}

var x = confirm("you wants to skip the welcoming message?");
console.log(x);

if(useGender == "male"){
    alert("welcome Mr " + userName)
} else if(useGender == "female")
{
    alert("welcome Ms " + userName)
} else
{
    alert("welcome " + userName)
}

var answers = []

var q1 = prompt("Are you sure of your information")
if(q1 == "yes"){
    answers.push("yes");
}else if(q1 == "no"){
    answers.push("no");
}else 
{
    answers.push("invalid");
}

var q2 = prompt("Are you from jordan")
if(q2 == "yes"){
    answers.push("yes");
}else if(q2 == "no"){
    answers.push("no");
}else 
{
    answers.push("invalid");
}

var q3 = prompt("Are you happy now")
if(q3 == "yes"){
    answers.push("yes");
}else if(q3 == "no"){
    answers.push("no");
}else 
{
    answers.push("invalid");
}

console.log(answers);
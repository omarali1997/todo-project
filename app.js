// prompt("enter your name");
// prompt("enter your gender");

// alert("welcome");




var userName = prompt("enter your name")
console.log(userName);

var userAge = prompt("enter your gender(male , female)")
console.log(userAge);


var userAge = prompt("enter your age");
if (userAge <= 0){
    alert("you enter wrong age please enter again")
    userAge = prompt("enter your age");
}

var x = confirm("you wants to skip the welcoming message?");
console.log(x);
let scoreIntroduction = 20;
let scoreGit = 50;
let scoreJS = 60;
let calculation = (scoreIntroduction + scoreGit + scoreJS) / 3;
let userName = "Vasya";
let userSurname = "Petrov";
let fullName = userName + " " + userSurname;
console.log(`Your average score ${fullName} = ${Math.floor(calculation)}`);

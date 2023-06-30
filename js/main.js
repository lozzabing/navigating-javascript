const companyName = "Lauren Bingham VA";
let vaccinated = "true";

// console.log(morning);
// console.log(firstPrize);
// console.clear();

let firstName = "Pippi";

console.log("Your pup's name is " + firstName);
console.log(`Your cat's name is ${firstName}`);

let welcomeSentence = `Hey there thanks for stopping by ${firstName}`;

let result = welcomeSentence.toUpperCase();

console.log(result);

console.log(`${result.length}`);

let resultLength = result.length;
console.log(resultLength);

const sentence = "Baby hot baby OK";
console.log(sentence.toLowerCase());

const word = "Pets";
console.log(word.toUpperCase());

console.log(word);

console.log(word + 599);

console.error("Error!");

console.warn("Warning!");

console.log(30+10);

// let Cali = 5
// let Archie = 3
// let Pippi = 9
// console.log(Cali >=1 && Cali <=4);
// console.log(Archie >=1 && Archie <=4);
// console.log(Pippi >=12 || Cali >=12);
// console.log(Pippi == 9);
// console.log(Cali != 5);

// let age = 0.5;

// const puppySchool = (age < 1) ? "You're Enrolled!" : "Check out our adult doggy classes!";

// console.log(puppySchool);

// console.log(typeof puppySchool);

// let petAge = 1;
// console.log(petAge++);
// console.log(petAge++);
// console.log(petAge++);
// console.log(petAge--);
// console.log(petAge--);

// if (petAge >= 5) {
//     greeting();
// } else {
//     greetingWelcome();
// }

// function greetingWelcome () {
//     alert('Welcome!');
// }

// function greeting () {
//     alert('Turn back!');
// }
// console.log(petAge);

let discount = 10;
let firstKittenVaccine = 100;
let firstKittenWormer = 20;

function newKittenPackage(firstKittenVaccine, firstKittenWormer) {
    firstKittenVaccine = 180;
    firstKittenWormer = 18;
    let kittenDiscount = firstKittenVaccine + firstKittenWormer;
    console.log(kittenDiscount - discount);
}

newKittenPackage();

function newKittenPackage(firstKittenVaccine, firstKittenWormer) {
    firstKittenVaccine = 60;
    firstKittenWormer = 18;
    let kittenDiscount = firstKittenVaccine + firstKittenWormer;
    if (kittenDiscount <= 100) {
        console.log("You need to purchase more items!")
        return;
    }
    else {
        console.log(kittenDiscount - 20);
    }
}

newKittenPackage();

const wormingTablet = 10;
const fleaTreatment = 20;
const kittenFood = 50;

function newKittenThings () {
    let shoppingCart = wormingTablet + fleaTreatment + kittenFood;
    console.log(shoppingCart - 10);
}

newKittenThings ();

function parasiteTreatment () {
    let updatedCart = wormingTablet + fleaTreatment;
    console.log("Well done, here's your discount!")
}

parasiteTreatment ();

let time = 8;

function welcomeMessage() {
    if (time <=17) {
       return console.log("Hello and welcome, we are open!");
    } else {
        console.log("Sorry, we're closed!");
    }
}

function newWelcome () {
welcomeMessage ();
console.log("Well done");
}

newWelcome();


function rockPaperScissors () {
    if (pickWeapon1 === "rock" && pickWeapon2 === "scissors") {
       return console.log("Rock wins!");
    }
    if (pickWeapon1 === "rock" && pickWeapon2 === "paper") {
        return console.log("Paper wins!"); 
    }
    if (pickWeapon1 === "scissors" && pickWeapon2 === "paper") {
        return console.log("Scissors wins!");
    }
    if (pickWeapon2 === "rock" && pickWeapon1 === "scissors") {
        return console.log("Rock wins!");
    }
    if (pickWeapon2 === "rock" && pickWeapon1 === "paper") {
        return console.log("Paper wins!");
    }
    if (pickWeapon2 === "scissors" && pickWeapon1 === "paper") {
        return console.log("Scissors wins!");
    }
    else {
       return console.log("You need to pick a weapon!")
    }
    }

let pickWeapon1 = "scissors";
let pickWeapon2 = "paper";

rockPaperScissors ();


// let newMessage = function () {
//     alert("Hello there again!")
// }

// newMessage ();

// function add(a, b) {
//     return a + b;
// }

// add (5+6)



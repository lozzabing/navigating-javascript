// const companyName = "Lauren Bingham VA";
// let vaccinated = "true";

// console.log(morning);
// console.log(firstPrize);
// console.clear();

// let firstName = "Pippi";

// console.log("Your pup's name is " + firstName);
// console.log(`Your cat's name is ${firstName}`);

// let welcomeSentence = `Hey there thanks for stopping by ${firstName}`;

// let result = welcomeSentence.toUpperCase();

// console.log(result);

// console.log(`${result.length}`);

// let resultLength = result.length;
// console.log(resultLength);

// const sentence = "Baby hot baby OK";
// console.log(sentence.toLowerCase());

// const word = "Pets";
// console.log(word.toUpperCase());

// console.log(word);

// console.log(word + 599);

// console.error("Error!");

// console.warn("Warning!");

// console.log(30+10);

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

// let discount = 10;
// let firstKittenVaccine = 100;
// let firstKittenWormer = 20;

// function newKittenPackage1(firstKittenVaccine, firstKittenWormer) {
//     firstKittenVaccine = 180;
//     firstKittenWormer = 18;
//     let kittenDiscount = firstKittenVaccine + firstKittenWormer;
//     console.log(kittenDiscount - discount);
// }

// newKittenPackage1();

// function newKittenPackage2(firstKittenVaccine, firstKittenWormer) {
//     firstKittenVaccine = 60;
//     firstKittenWormer = 18;
//     let kittenDiscount = firstKittenVaccine + firstKittenWormer;
//     if (kittenDiscount <= 100) {
//         console.log("You need to purchase more items!")
//         return;
//     }
//     else {
//         console.log(kittenDiscount - 20);
//     }
// }

// newKittenPackage2();

// const wormingTablet = 10;
// const fleaTreatment = 20;
// const kittenFood = 50;

// function newKittenThings () {
//     let shoppingCart = wormingTablet + fleaTreatment + kittenFood;
//     console.log(shoppingCart - 10);
// }

// newKittenThings ();

// function parasiteTreatment () {
//     let updatedCart = wormingTablet + fleaTreatment;
//     console.log("Well done, here's your discount!")
// }

// parasiteTreatment ();

// let time = 8;

// function welcomeMessage() {
//     if (time <=17) {
//        return console.log("Hello and welcome, we are open!");
//     } else {
//         console.log("Sorry, we're closed!");
//     }
// }

// function newWelcome () {
// welcomeMessage ();
// console.log("Well done");
// }

// newWelcome();

// setTimeout(newWelcome, 5000);


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
    if (pickWeapon2 === "rock" && pickWeapon1 === "rock") {
        return console.log("It's a tie!");
    }
    if (pickWeapon2 === "paper" && pickWeapon1 === "paper") {
        return console.log("It's a tie!");
    }
    if (pickWeapon2 === "scissors" && pickWeapon1 === "scissors") {
        return console.log("It's a tie!");
    }
    else {
       return console.log("You need to pick a weapon!")
    }
    }

let pickWeapon1 = "scissors";
let pickWeapon2 = "paper";
pickWeapon1 = "paper";

rockPaperScissors ();

// let newMessage = function () {
//     alert("Hello there again!")
// }

// newMessage ();

// function add(a, b) {
//     return a + b;
// }

// add (5+6)

// console.log(location.href);
// console.log(location);
// console.log(window.location);
// console.log(history);

// function messageSecondsFive() {
// console.log("Delay this message by 5 seconds")
// }
// function messageSecondsTwo() {
// console.log("Delay this message by 2 seconds");
// }
// function messageSecondsNone() {
// console.log("Display this message immediately");
// }

// setTimeout(messageSecondsFive, 5000);
// setTimeout(messageSecondsTwo, 2000);
// messageSecondsNone();


// const newColor = setInterval (setColor, 500)

// function setColor() {
//     let x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }

// function stopColor() {
//     clearInterval(newColor);
//   }

//   stopColor();

// localStorage.setItem('welcome', 'hi there');
// localStorage.setItem('font', 'courier new');
// localStorage.setItem('orders', 8);

// function checkLocalStorage() {
//     console.log(localStorage.getItem('welcome'));
//     console.log(localStorage.getItem('font'));
//     console.log(localStorage.getItem('orders'));

// }

// checkLocalStorage();

// favouriteCat("Pippi");
// favouriteCat(6);
// favouriteCat("Archie");

// function favouriteCat(name) {
//     console.log("My favourite cat is " + name);
// }

// document.getElementById("smilingcat").style.padding = "5rem";

// document.getElementById("wrycat").style.backgroundColor = "lightBlue";


// const clickIt = document.getElementById("clickit")

// function alertAlertAlert() {
//     alert("Yo!");
//     clickIt.style.color = "Blue";
//     clickIt.innerHTML = "Gotcha";
// }

// clickIt.addEventListener("mouseover",alertAlertAlert);

let button = document.querySelector(".btnstyle");

function poppyBtn() {
    button.classList.toggle("btnstylepop");
}

button.addEventListener("click",poppyBtn);

let largeSmileCat = document.querySelector(".smilingcat");

let largeWryCat = document.getElementById("wrycat");

function jumpSmileCat() {
    largeSmileCat.classList.toggle("catstylepop");
}

function jumpWryCat() {
    largeWryCat.classList.toggle("catstylepop");
}

largeSmileCat.addEventListener("click",jumpSmileCat);

largeWryCat.addEventListener("click",jumpWryCat)

let largeTitle = document.querySelector(".highlighted");

function jumpTitle() {
    largeTitle.classList.toggle("btnstylepop");
}

largeTitle.addEventListener("click",jumpTitle);





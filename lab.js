//Question 1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
characters.forEach; {console.log(characters)};

//Question 2
let firstName = "Harry";
let house = "Gryffindor";
let greeting = `Welcome, ${firstName} of ${house}`;
console.log(greeting);

//Question 3
var characterName = "Hermione"
console.log( characterName.toUpperCase());
console.log(characterName.toLowerCase());

//Question 4
let spel = " Expelliarmus";
console.log(spel.trim());

//Question 5
var quote = "I solemnly swear that I am up to no good ";
console.log(quote.trim(quote));

//Question 6 
var firstname = "Ron";
var lastName = "Weasley";
let combine = firstname.concat(lastName);
console.log(combine);

//Question 7 
var sent = "Draco is a good wizard";
let replacedStr = sent.replace("good", "bad");
console.log(replacedStr);

//Question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherine');
console.log(houses);
let lastElement = houses.pop();
console.log(lastElement);


//Question 9
let spell = ['ALlohormora', 'Lumos', 'Nox'];
spell.unshift('accio');
console.log( spell);

//Question 10
let prof = ['DUmbledoor', 'Snape', 'Hagrid', "MCGonell"];
let sliced = prof.slice(2, 3);
console.log(sliced);

//Question 11
let stu = ['neville', 'Seamus', 'Dean', 'Parvati'];
stu.splice(1, 3); 
console.log(stu);

//Question 12
let em = "Mischief Managed";
let nam = "Harry"
console.log( `"${em.trim()}"`);
console.log(em.toLowerCase());
let combined = em.concat(nam);
console.log( combined);

//Question 13
let wizards = ['harry', 'hermione', 'ron']
wizards.push('Luna', 'Draco');
console.log(wizards);

//Question 14
var mess = "Welcome to Hogwarts school of witchcraft"
let slicedArr = mess.slice("Hogwarts");
console.log(slicedArr);
let arr2 = ["Castle"];
let combinedArr = arr2.concat();
console.log( combinedArr);

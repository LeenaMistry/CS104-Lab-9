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
console.log( str.toUpperCase(characterName));
console.log(str.toLowerCase(characterName));

//Question 4
var spell = " Expelliarmus";
console.log(${str1.trim(spell)});

//Question 5
var quote = "I solemnly swear that I am up to no good ";
console.log(${str1.trim(quote)});

//Question 6 
var firstname = "Ron";
var lastName = "Weasley";
let combined = firstname.concat(lastName);
console.log(combined);

//Question 7 
var sent = "Draco is a good wizard";
let replacedStr = sent.replace("good", "bad");
console.log(replacedStr);

//Question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push(4, 5);
console.log(houses);
let lastElement = arr.pop(houses);
console.log(lastElement);
console.log(lastElement);

//Question 9
let spell = ['ALlohormora', 'Lumos', 'Nox'];
arr.unshift("accio");
console.log( spell);
console.log( firstElement);

//Question 10
let prof = ['DUmbledoor', 'Snape', 'Hagrid', "MCGonell"];
let slicedArr = prof.slice(2, 3);
console.log(slicedArr);

//Question 11
let stu = ['neville', 'Seamus', 'Dean', 'Parvati'];
arr.splice(1, 4); 
console.log("After splice(1, 2, 9, 10):", arr);

//Question 12
let em = "Mischief Managed";
let new = "harry"
console.log("\ntrim() example:", `"${em.trim()}"`);
console.log("toLowerCase():", em.toLowerCase());
let combined = em.concat(new);
console.log("\nconcat() example:", combined);

//Question 13
let wizards = ['harry', 'hermione', 'ron']
wizards.push('Luna', 'Draco');
console.log(wizards);

//Question 14
var mess = "Welcome to Hogwarts school of witchcraft"
let slicedArr = mess.slice("Hogwarts");
console.log("\nArray slice(1, 3):", slicedArr);
let arr2 = ["Castle"];
let combinedArr = arr.concat(arr2);
console.log( combinedArr);

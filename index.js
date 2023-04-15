// camelCase
// snake_case

// Data Types

// String "hello world"
// Number 250
// Array [1,2,3] | ["a",1, [1],{},ture]
// Object {name:"abdullah",
//  fname:"junaid",
//  surname:"motiwala"}
// Boolean true | false
// var | let | const

// Var could reassigned as well as re declared
// var my_name = "abdullah"
// var my_name = "M.Abdullah"

// // Let could't be redeclared although could re-assign
// let f_name = "junaid"
// f_name = "M.Junaid"

// // Const could neither be re-assigned not re-declared
// const sur_name = "motiwala"
// // sur_name = "MotiWala", it is not possible
// console.log(my_name, f_name, sur_name)

// let my_name = 'hammad'
// const pi = 3.142
// my_name = 'Shaffan'

// Arthimetic Operations
// + -* /
// let class_1 = "09-11"
// let class_2 = "11-01"
// let combined_classes = class_1 + " " + class_2
// console.log("concetenated", combined_classes)

// let total = 1;
// total = 1 + 1

// total = 5 - 2
// total = 2 * 4
// total = 5 / 2
// total = 5 % 2
// // console.log(total)
// let number_value = 250
// let string_value = "250"

// console.log(number_value === string_value, typeof number_value, typeof string_value)
// let concetenated_values = number_value + 1 + string_value
// console.log(concetenated_values)

// let my_string = "bano-qabil"
// let start_timing = 09
// let end_timing = 11
// let is_ramadan = true
// let students = ["Awais", "Yousuf"]
// let sessions = { session_1: "09-11", session2: '11-01' }

// let schedule = my_string + " " + start_timing + "-" + end_timing
// console.log(schedule)

// Conditions

// let is_ramadan = false
// if (is_ramadan === true) {
//     console.log("Happy Ramadan")
// }

// let before_matric = false
// let after_matric = true
// let graduated = false

// if (before_matric) {
//     console.log("Maze hi maze")
// } else if (after_matric) {
//     console.log("thode se maze")
// } else if (graduated) {
//     console.log("Maze khtam hne wale h")
// } else {
//     console.log("No maze found")
// }

// let your_age = prompt("Enter Your Age")
// alert("You can visit website")

// console.log("Ready Steady");

// Loops
// for-loop
// while-loop
// do-while-loop
// if ("value" === true) {
// code here
// }

// Initialization
// Condition
// Updation
// for (let i = 0; i < 5; i = i + 1) {
//   console.log(i, "loop");
//   // code here
// }

// keywordd(conditions){
//     // code
// }
// break;
// continue;

// Problem No. 1
// find the first odd number
// for (let i = 1; i < 200; i = i + 1) {
//   if (i % 2 === 1) {
//     console.log(i, "odd");
//   }
//     else {
//     console.log(i, "even");
//   }
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// Problem No. 2
// find the even or odd except the no. which can be divided by 3
// for (let i = 0; i < 10; i = i + 1) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// Iteration 1
//   console.log(0);

// Iteration 2
// console.log(1)

// Iteration 3
// console.log(2)

// Iteration 4
// if (i % 3 === 0) {
//     continue;
//   }

// // console.log(3)

// Iteration 5

// // While Loop
// let i = 0;
// while (i < 5) {
//   // code here
//   console.log(i);
//   if (i == 0) {
//     i = i + 2;
//   } else {
//     i = i + 1;
//   }
// }

// let user_prompt = "yes";
// while (user_prompt === "no") {
//   // I will show prompt here
// }

// do {
//   // Open Prompt here
//   let user_prompt = "yes"
// } while (user_prompt === "no");

// let i = 5;
// while (i < 5) {
//   console.log(i, "while");
//   i = i + 1;
// }

// do {
//   console.log(i, "do");
//   i = i + 1;
// } while (i < 5);

// do {
//   console.log(i);
// } while (i < 5);

// if(){}
// for(){}
// while(){}
// do{}while()

// For
// While
// Do-While
// break
// continue

// print the table of 2 using while loop
// let tableNo = 2;
// let i = 1;
// while (i <= 10) {
//   console.log("2 X " + i + " = " + i * tableNo);
//   i = i + 1;
// }

// // Print the table of 5 using for loop
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log("5 X " + i + " = " + i * 5);
// }

// for-loop
// while-loop
// do-while-loop
// let i = 0
// while (i < 5) {
//   console.log(i)
//   i = i + 1
// }
// do {
//   console.log(i, "do")
//   i = i + 1
// } while (i < 0)


// for (let i = 0; i < 5; i = i + 1) {
//   if (i === 1) {
//     continue;
//   }
//   if (i === 2) {
//     break
//   }
//   console.log(i, "for")
// }
// let num = 10
// // let num2 = ++num
// num = num + 1
// let num2 = num
// console.log(num2, num)
// let num = 10
// let num2 = num++
// console.log(num2)

// let late = true
// if (late === false) {
//   console.log("very good")
// } else if (late === true) {
//   console.log("okay ")
// } else {
//   console.log("not okay")
// }

// Conditional Operators
// >
// <
// <=
// >=
// ==
// ===
// !=
// !==
// let isYoung = true
// let goodIncome = false
// let ownHouse = true
// goodIncome = true
// if (isYoung && goodIncome && ownHouse) {
//   console.log("Rishta Pakka")
// } else {
//   console.log("Istikhara me na aya")
// }

// let isStress = true
// let gotAccident = false
// let dantParGayi = true
// if (isStress || gotAccident || dantParGayi) {
//   console.log("Aja Chai Peete")
// } else {
//   console.log("Topi")
// }


// let num1 = 1
// let num2 = 2

// if (num1 === 1) {
//   if (num2 === 2) {
//     if (num1 === 1) {
//       console.log("Nest True")
//     }
//     console.log("True")
//   } else {
//     console.log("False")
//   }
// }

// let myArray = [1, "2", 3,]
// // Remove
// myArray.pop()
// // Add in last
// myArray.push(4)
// // Add in start
// myArray.unshift(false)
// // Remove from start
// myArray.shift()

// console.log(myArray.length)
// console.log(myArray)

// let flag = true
// let gamePoints = 1005
// if (gamePoints <= 1000) {
//   flag = false
// }

// if (flag) {
//   alert("You are Pro")
// } else if (!flag) {
//   alert("You are noob")
// }

// let myArray1 = [1, 2, 4]
// let myArray2 = ["abdullah", "Ali", "Arbaz"]
// let target = 1
// console.log(myArray1[target])
// for (let i = 0; i < myArray1.length; i++) {
//   let current_value = myArray1[i]
//   for (let j = 0; j < myArray2.length; j++) {
//     console.log(current_value, myArray2[j])
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log("i", i)
//   for (let j = 0; j < 3; j++) {
//     console.log("j", j)
//   }
// }


// console.log(maxIntegar, "result")

// let myFirstString = "HellO"
// let mySecondString = "woRlD"

// console.log(myFirstString.toLowerCase())
// console.log(myFirstString.slice(1, 4), "slice")
// myArray.splice(1, 2, 8, 11)
// console.log(myArray, "splice")
// console.log(myFirstString.slice(1), "slice All")
// console.log(mySecondString.toUpperCase())
// console.log(myFirstString.indexOf("llo"), "index")
// console.log(myFirstString.lastIndexOf("l"), "last index")

// console.log(myFirstString[1], "charaAt")
// console.log(myFirstString.charAt(1), "charaAt Func")

// let newHello = myFirstString.replace("O", "o")
// let newAllHellow = myFirstString.replaceAll("l", "L")
// let joinedValues = myArray.join("-")
// let splittedVallues = mySecondString.split("o")
// console.log(newHello, newAllHellow, "new")
// console.log(joinedValues, "join")
// console.log(splittedVallues, "split")

// let myWord = "banoqabil"
// // let myWordSplitted = myWord.split("")
// // let firstLetter = myWord.indexOf("b")
// // let secondLetter = myWord.indexOf("q")
// // myWordSplitted.splice(firstLetter, 1, myWord[firstLetter].toUpperCase())
// // myWordSplitted.splice(secondLetter, 1, myWord[secondLetter].toUpperCase())
// // let result = myWordSplitted.join("")
// // console.clear()
// // console.log(result, "result")
// let firstLetter = myWord.slice(0,1)
// let remainingLetter= myWord.slice(1)
// console.clear()
// let result=firstLetter.toUpperCase()+remainingLetter
// console.log(result)


// let floatNumber = 15205.26
// console.clear()
// console.log(Math.round(floatNumber))
// console.log(Math.ceil(floatNumber), "ceil")
// console.log(Math.floor(floatNumber), "floor")
// console.log(Math.random().toFixed(2), "random")

// let myString = "150"
// console.log(typeof myString, "string")
// console.log(typeof parseInt(myString), "parse")
// console.log(typeof Number(myString), "Number")
// console.log(typeof +(myString), "+")

// let myObject = {
//     name: "BanoQabil",
//     superVision: "Al Khidmat",
//     // organization: "Jamat e Islami",
// }
// myObject["organization"] = "Jamat-e-Islami"
// // delete myObject["organization"]
// // console.log(myObject)
// console.log(myObject)

// let customKey = "name"
// console.log(myObject[customKey], "square notation")
// console.log(myObject.name, "Dot notation")

// let organization = [{ name: "Hammad" }, { name: "Abdul Hadi" }]

// let myObj = {
//     name: "Your Name",
//     fname: "Father Name"
// }
// let key = prompt("Enter the key").toLowerCase()
// alert(myObj[key])
// function callingBlock() {
//     prompt("enter")
//     console.log("valeue")
//     console.log("valeue")
//     console.log("valeue")
//     console.log("valeue")
// }

// callingBlock()

// let name = "Abdullah"
// let fname = "junaid"

// function callingWithParametes(value) {
//     // console.log(value)
//     let name = "Hammad"
//     let surname = "motiwala"
//     console.log(name, "fun")
//     console.log(fname, "fname")
// }
// // console.log(surname, "surname")
// console.log(name, "out")

// callingWithParametes("Abdullah")
// // callingWithParametes("hammad")


// function addPrefix(name, prefix) {
//     let userName = prefix + name
//     return userName
// }
// function addPrefix(name, prefix) {
//   let userName = prefix + name
//   return userName
// }

// let result = addPrefix("Hammad", "Mr.")
// console.log(result)

// let Roza = 20

// switch (Roza) {
//   case 20:
//     console.log("First Taaq Raat")
//     break;
//   case 22:
//     console.log("Second Taaq Raat")
//     break;
//   default:
//     console.log("No Taaq Raat")
//     break;
// }
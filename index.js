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
if ("value" === true) {
  // code here
}

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
for (let i = 1; i < 200; i = i + 1) {
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
}

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

// Print the table of 5 using for loop
for (let i = 1; i <= 10; i = i + 1) {
  console.log("5 X " + i + " = " + i * 5);
}

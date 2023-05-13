console.log("ecma")

// myArray = {
//     map:(ele)=>{
//         // function ele
//     }
// }
// let myArray = [1, 3, 6, 7]
// let updatedArray = []
// for (let i = 0; i < myArray.length; i++) {
//     let element = myArray[i]
//     // element++
//     updatedArray.push(++element)
// }
// let myArray = [1, 2, 3, 4, 5]
// let updatedArray = myArray.map(function (element) {
//     let temp = element + 1
//     temp *= 3
//     let isEven = temp % 2
//     console.log(isEven)
//     // return temp

//     return undefined
// })

// MAP
// let array1 = [1, 2, 3, 4, 5]
// let array2 = array1.map((e) => {
//     if (e % 2 == 0) { return 'even' }
//     else { return 'odd' }
// })
// console.log(array2)

// default params
// const myFun = (v1, v2, v3 = false) => {

// }
// myFun(1, 2, true)

// // spread operator
// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// //  [1,2,3,4] 
// const temp = [...arr1, ...arr2]
// console.log(temp)

// // temp = [1, 2, [4, 5]]

// Rest Params
// const func2 = (v1, v2, ...vs) => {
//     console.log(v1, v2, vs)
// }

// func2(1, 2, 3, 4, 5, 6, 7, 8, 9, "test", false, { key: 'value' }, [2])


// Template Literals
// const PI = 3.14
// console.log('Value of PI is ' + PI)
// console.log(`Value of PI is ${PI}`)

let q1 = "question 1"
let q2 = "Question 2"
let value = 'q3'

const questions = {
    q1,
    q2: q2,
    [value]: "question 3",
    method() {

     }
    
}
console.log(questions)
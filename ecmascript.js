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

// let q1 = "question 1"
// let q2 = "Question 2"
// let value = 'q3'

// const questions = {
//     q1,
//     q2: q2,
//     [value]: "question 3",
//     method() {

//      }

// }
// console.log(questions)



// Destrucutring
// const myArray = [1, 2, 3, 4, 5]
// const myObj = { name: "abdullah", fname: 'junaid' }
// let firstEle = myArray[0]
// let secEle = myArray[1]

// const [e, e1, , e2] = myArray
// const { name: instructor, fname, surname = "not found" } = myObj


// const myArray = [{ name: "xyz", order: 4 }, { name: "xyz", order: 6 }, { id: 1, email: 'xyz@gmail.com', name: "xyz", order: 5 }, { name: "xyz", order: 1 },]
// let number = myArray.find((e) => { return e.order > 4 })
// let users = myArray.filter((e) => { return e.order > 4 })
// console.log(number, users)

// "hello".startsWith("ello", 1)

// const animateAll = (animate) => {
//     setTimeout(() => {
//         animate(words[0]);
//         setTimeout(() => {
//             animate(words[1]);
//             setTimeout(() => {
//                 animate(words[2]);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// setTimeout(() => { console.log('set') }, 5000)

// firstFunction(args, function() {
//     secondFunction(args, function() {
//       thirdFunction(args, function() {
//         // And so on…
//       });
//     });
//   });

// function msgAfterTimeout(msg, who, timeout) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
//     })
// }
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let myValue = true
//         if (myValue) {
//             resolve({ name: "abdullah" })
//         }
//         else {
//             reject('It is rejected')
//         }
//     }, 3000);
// })
// myPromise.then((value) => {
//     console.log(value)
// })
// let data = undefined

// setTimeout(() => {
//     data = { name: "abdullah" }
//     console.log('now run')
// }, 3000)

// console.log(data)
// console.log(myPromise)
// console.log('start')

// let data = undefined
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         data = { name: "abdullah" };
//         console.log('resolved')
//         resolve(data)
//     }, 3000)
// })
// myPromise.then((value) => {
//     console.log('result')
//     console.log(value, data)
// })


// console.log('end')

// let a=[]
// mypromise =new Promise((resolved,reject )=>{
// setTimeout(() => {
//     a=[1,2,3]
//     resolved(a)
// }, 3000);
// })
// mypromise.then((b)=>{
// console.log(b)
// })
// console.log(a)


// const response = fetch('https://fakestoreapi.com/products/1')
// response.then((res) => {
//     let data = res.json()
//     data.then((value) => {
//         console.log(value)
//     })
// })

const getResult = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1')
    const data = await response.json()
    return data
}

getResult().then((value) => {
    console.log(value)
})
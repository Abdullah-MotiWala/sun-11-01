// var numberVariable = 2
// let stringVariable = "faheem"
// const booleanVariable = true
// // let myArray = [1, 2, 3, "Ali"]
// var myObj = {
//     name: "Ahmed",
//     a: 1,
//     bool: true,
//     [stringVariable]: "Abdullah"

// }

// let stringValue = '123'
// let stringConvert1 = stringValue * 1
// let stringConvert2 = parseInt(stringValue)
// let stringConvert3 = Number(stringValue)
// let stringConvert4 = +stringValue
// let stringConvert5 = Number('abc')
// let stringConvert6 = Number('ced')
// console.log(stringConvert5, isNaN(stringConvert5))

// let convertedValues = {
//     stringConvert1, stringConvert2, stringConvert3, stringConvert4
// }


// let numberVariablesum = stringConvert1 + stringConvert2
// let numberVariableMultiply = stringConvert1 * stringConvert2
// let numberVariableDivide = stringConvert1 / stringConvert2
// let numberVariableSubtraction = stringConvert1 - stringConvert2
// let numberVariableModuls = stringConvert1 % 2

// let isOdd = numberVariableModuls === 1
// let isEven = numberVariableModuls !== 1


// if (isEven) {
//     console.log("Even")
// }
// else {
//     console.log("Odd")
// }

// if (isEven && numberVariablesum === 236) {
//     console.log("true")
// }
// else if (isEven && numberVariablesum !== 236) {
//     console.log("False")
// }


// if (typeof numberVariableMultiply === "string" || typeof numberVariableMultiply === "number" || isNaN(numberVariableMultiply)) {
//     console.log(typeof numberVariableMultiply)
// }

// // for (let i = 0; i < 6; i++) {
// //     console.log(i)
// // }

// let i = 1
// while (i < 6) {
//     console.log(i)
//     i++
// }

// let userValue;
// // do { userValue = prompt('yes or no') } while (userValue !== "yes")

// let myArray2 = [1, 2, 3, 4]

// for (let a of myArray2) {
//     console.log(a)
// }
// myArray2.forEach((a) => { console.log(a) })
// for (let value in convertedValues) {
//     console.log(value, convertedValues[value])
// }
// function items(item, price, ...others) {
//     console.log(`this ${item} price is ${price}`)
//     console.log(`other detail are ${others}`)
// }
// items("Rice", 220, "basmati", "50kg");
// // iife
// let myVar2 = 2;

// (function () {
//     let myVar2 = 2
//     console.log('invoke')
// })()

// console.log(myVar2)


// let varPromise = new Promise((resolve, reject) => {
//     let age = parseInt(prompt("Enter youtr age"))
//     if (age >= 50) {
//         reject("YOU cannot enter ")
//     }
//     else {
//         resolve("you Can enter")
//     }
// })

// varPromise.then((value)=>{
// console.log(value)
// })
// varPromise.catch((error)=>{
// console.log(error)
// })


// const asyncfunc = async () => {
//     try {
//         let response = await varPromise
//         console.log(response, "response")

//     } catch (err) {
//         console.log(err)
//     }
// }

// asyncfunc()


// const myData = { name: "malik", fname: 'riaz' }
// let name = myData.name
// const { fname } = myData

// const students = [1, 2, 3]
// const [first, second] = students


// DOM
const cartHandler = (product) => {
    alert('Order added to cart')
    let prevOrder = JSON.parse(localStorage.getItem('cart'))
    let currentOrder = []
    if (prevOrder) {
        currentOrder = [product, ...prevOrder]
    } else {
        currentOrder = [product]
    }
    localStorage.setItem('cart', JSON.stringify(currentOrder))
}
const productData = [{ des: "First", id: 1 }, { des: 'second', id: 2 }]
function createProduct(products) {
    let mainDiv = document.querySelector('#products')

    for (let product of products) {

        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        let prodText = document.createTextNode(product.des)
        productDes.appendChild(prodText)

        let productButton = document.createElement('button')
        productButton.innerText = 'Add to cart'
        productButton.addEventListener('click', () => cartHandler(product))

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)

        mainDiv.appendChild(productDiv)


    }
}

createProduct(productData)
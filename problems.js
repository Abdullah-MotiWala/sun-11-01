// find the heighest integar in array
let myArray = [1, 5, 6, 8, 9, 4, 5, 12, 11]
let maxIntegar = 0
function findMax() {
    for (let i = 0; i < myArray.length; i++) {
        let currentInegar = myArray[i]
        if (currentInegar > maxIntegar) {
            maxIntegar = currentInegar
        }
    }
}
findMax()

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
function addPrefix(name, prefix) {
    let userName = prefix + name
    return userName
}

let result = addPrefix("Hammad", "Mr.")
console.log(result)

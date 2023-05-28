type objType = {
    name: string,
    product: Object,
    id: number,
}
type discountType = {
    discount: number
}

type userType = {
    [k: string]: string | boolean
}

let myNum: number = 5


let updatedNum: number = 10 - myNum
for (let i = 0; i < updatedNum; i++) {
    console.log(i)
}


let string: string = "myString"
let isBoolean: boolean = true
let myArr: [number, string] = [25, "string"]
let myArr2: Array<number | null> = [25, 26, 27, null]
let myObj: objType & discountType = { name: "pepsi", product: {}, id: 56, discount: 25 }
let myObj2: objType = { name: "pepsi", product: {}, id: 56 }
let myObj3: userType = { isActive: true, name: "user", fname: "user", dob: "12-5-2002", phone: "03170266666" }
let myArr3: objType[] = [myObj, myObj2]


console.log(myObj)


let fornumber: number = 20

let username: "aamir" | "bilal" = "aamir"
username = "bilal"
type Student = { [key: string]: string | number }
type MyFunc = (param: 250 | 265) => null
type MyFunc2 = (algo1: number) => number
let myobj: Student = { name: 'Anus', rollno: 256 }


function myFoo(param1: number): void {
    console.log("func")
}

const myFoo4 = (val: number): number => {
    alert(val)
    return val
}

function myFoo5<T>(val: T): T {
    alert(val)
    return val
}
function identity<Type>(arg: Type): Type {
    return arg;
}
const myFoo2: MyFunc = (param) => {
    console.log(param)
    console.log(param, "param")
    alert(param)
    return null
}
const FooVar: string = "string"

const myFoo3: Function = () => {

}

myFoo5<number>(5)
myFoo5<string>("5")
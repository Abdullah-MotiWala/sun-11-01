// Access cart element
// acces cart value
// add 1 to cart value
// update cart value
function addToCart() {
    const cart = document.getElementsByClassName("cart")[0].innerText
    const updatedCart = Number(cart) + 1
    document.getElementsByClassName("cart")[0].innerText = updatedCart
    alert("Article added to cart")
}
const user = {}
function checkInput() {
    let errors = []

    const inputFields = document.getElementsByClassName("input")
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            let errorTxt = `${inputFields[i].name} is required`
            errors.push(errorTxt)
        } else {
            user[inputFields[i].name] = inputFields[i].value
        }
    }
    if (errors.length > 0) {
        // alert(errors.join(","))
        return false
    }

    localStorage.setItem("user", JSON.stringify(user))

    return false
}


function addEmail() {
    const existingEmail = document.getElementById("email").value
    // function will stop if @ found
    if (existingEmail.includes("@")) {
        return
    }
    let myDomain = "@bq.com"
    const domainizedEmail = `${existingEmail}${myDomain}`
    document.getElementById("email").value = domainizedEmail
}

let expanded = false
function toggleMore(addition) {
    const paragraph = document.querySelector("#see-more-text").innerHTML
    const updatedParagraph = `${paragraph} ${addition}`
    if (!expanded) {
        document.querySelector("#see-more-text").innerHTML = updatedParagraph
        expanded = true
    } else {
        document.querySelector("#see-more-text").innerHTML = "updatedParagraph"
        expanded = false
    }

}

function swapImage(image) {
    const pic = document.querySelector(".swappable")
    pic.src = image
}




// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents = p.innerHTML;
// console.log(d,contents)
const errorMessages = ["Email not entered", "Password not entered"]
const submitButton = document.querySelector("button")
const showErrors = () => {
    const messageWrapper = document.querySelector("#messages")
    for (let errorMessage of errorMessages) {

        // text node creation
        let errorText = document.createTextNode(errorMessage)

        // eleemtn create
        let errorElement = document.createElement("p")

        // error text appended to element
        errorElement.appendChild(errorText)

        messageWrapper.appendChild(errorElement)

    }
}
submitButton.addEventListener('click', function () {
    const image = document.querySelector("#welcome_image")
    if (image.hasAttribute('style')) {
        image.style.display = "inline";
    };
    showErrors()
})

// dataTypes
String
Object
Boolean
Number
Array

const myObj = {
    name: "value",
    setAttendence: function () {
        console.log(this.name)
    }
}

// myObj.name = "Abdullah"
// myObj.fname = "junaid"
// delete myObj.name
// myObj.setAttendence()

const loginButton = document.querySelector("#login")
const loginHandler = () => {
    // user inputted values

    // user registered values
    const userData = JSON.parse(localStorage.getItem('user'))
    console.log(userData)
}

loginButton.addEventListener("click", loginHandler)


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

function checkInput() {
    let errors = []

    const inputFields = document.getElementsByClassName("input")
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            let errorTxt = `${inputFields[i].name} is required`
            errors.push(errorTxt)
        }
    }
    if (errors.length > 0) {
        // alert(errors.join(","))
    }
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


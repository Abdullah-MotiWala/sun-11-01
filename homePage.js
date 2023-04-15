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

[{}]
const productData = JSON.parse(localStorage.getItem('cart'))

function createProduct(products) {
    let mainDiv = document.querySelector('#products')

    for (let product of products) {

        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        let prodText = document.createTextNode(product.des)
        productDes.appendChild(prodText)

        let productButton = document.createElement('button')
        productButton.innerText = 'Add to cart'
        // productButton.addEventListener('click', () => checkoutHandler(product))

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)

        mainDiv.appendChild(productDiv)


    }
}

createProduct(productData)
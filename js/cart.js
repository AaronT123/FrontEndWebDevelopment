//TODO: Fix js so that code doesn't need to be repeated
//      Currently needs to be repeated so cart works on both instances
//      Of whether the user adds an item to the cart (local storage) or not

// Set price on page load
document.onload = updateCartTotal()

// update price when quantity is changed
const quantityInputs = document.getElementsByClassName('quantity')
for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

// remove cart item on button press
const removeCartItemButtons = document.getElementsByClassName('btn-x')
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i]
    button.addEventListener('click', function (event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

// remove cart item from local storage on button press
const removeCartItemButtonsLocal = document.getElementsByClassName('local-storage-x')
for (let i = 0; i < removeCartItemButtonsLocal.length; i++) {
    const button = removeCartItemButtonsLocal[i]
    button.addEventListener('click', function (event) {
        window.localStorage.clear()
    })
}

try {
    //When the cart page loads it will add the item that has been saved in local storage
    //and append it to the cart table
    let itemObject = JSON.parse(window.localStorage.getItem('myItem'));
    let itemTitle = itemObject.myItemTitle
    let itemPrice = itemObject.myItemPrice
    let itemVariant = itemObject.myItemVariant
    let itemImageSrc = itemObject.myItemImageSrc
    //Create an element for the added item
    const cartRow = document.createElement("tr")
    cartRow.className = "cart-row"
    const cartItems = document.getElementsByClassName('cart-items-body')[0]
    const cartRowContents = `
    <td class="image-row">
        <img class="table-img" src="${itemImageSrc}" alt="wax burner" />
    </td>
    <td>
        <p class="product-name">${itemTitle}</p>
        <p class="product-variant">${itemVariant}</p>
    </td>
    <td><input class="quantity" type="number" id="quantity" value="1" name="quantity" min="1" max="99"></td>
    <td>
        <p class="cart-price">${itemPrice}</p>
    </td>
    <td><button class="btn-x local-storage-x">X</button></td>
    </tr>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    updateCartTotal()
}
catch (err) {

}

// update price when quantity is changed
const quantityInputs2 = document.getElementsByClassName('quantity')
for (let i = 0; i < quantityInputs2.length; i++) {
    const input2 = quantityInputs2[i]
    input2.addEventListener('change', quantityChanged)
}

// remove cart item on button press
const removeCartItemButtons2 = document.getElementsByClassName('btn-x')
for (let i = 0; i < removeCartItemButtons2.length; i++) {
    const button = removeCartItemButtons2[i]
    button.addEventListener('click', function (event) {
        const buttonClicked2 = event.target
        buttonClicked2.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

// remove cart item from local storage on button press
const removeCartItemButtonsLocal2 = document.getElementsByClassName('local-storage-x')
for (let i = 0; i < removeCartItemButtonsLocal2.length; i++) {
    const button2 = removeCartItemButtonsLocal2[i]
    button2.addEventListener('click', function (event) {
        window.localStorage.clear()
    })
}

// Update event when quantity of an item changes
function quantityChanged(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// update cart total when a change is made to the cart
function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0]
    const cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i]
        const priceElement = cartRow.getElementsByClassName('cart-price')[0]
        const quantityElement = cartRow.getElementsByClassName('quantity')[0]
        const price = parseFloat(priceElement.innerText.replace(/\u00A3/g, ''))
        const quantity = quantityElement.value
        total = total + (price * quantity)
    }
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    })
    const newTotal = formatter.format(total)
    document.getElementsByClassName('cart-total-price')[0].innerText = newTotal

}
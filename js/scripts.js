// Navbar stack
menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
});

//when add to cart button is pressed
const addToCartButtons = document.getElementsByClassName('add-to-cart')
for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

//add item to local storage
function addToCartClicked(event) {
    window.localStorage.clear();
    const button = event.target
    const shopItem = button.parentElement.parentElement.parentElement.parentElement
    const title = shopItem.getElementsByClassName('item-title')[0].innerText
    const price = shopItem.getElementsByClassName('item-price')[0].innerText
    const variant = shopItem.getElementsByClassName('item-variant')[0].value
    const imageSrc = shopItem.getElementsByClassName('item-img')[0].src
    const item = {
        myItemTitle: title,
        myItemPrice: price,
        myItemVariant: variant,
        myItemImageSrc: imageSrc,
    }
    window.localStorage.setItem('myItem', JSON.stringify(item));
    window.location.href = "cart.html";
}
import { menuArray } from './data.js'

// Render food items
const mainSection = document.getElementById("main")
const totalSection = document.getElementById("total-section")

const mainHTML = menuArray.map(item => {
    const {name, ingredients, id, price, emoji} = item

    return `
    <div class="item">
        <h1 class="item-emoji">${item.emoji}</h1>
        <h3 class="item-name">${item.name}</h3>
        <i class="fa-solid fa-cart-plus" data-id="${item.id}"></i>
        <h5 class="item-ingredients">${item.ingredients}</h5>
        <h4 class="item-price">${item.price}</h4>
        <hr>
    </div> 
    `
}).join('')

mainSection.innerHTML = mainHTML

// Total
document.addEventListener("click", function(e) {
    if (e.target.dataset.id) {
        renderTotalSection()
    }
})

function renderTotalSection() {
    totalSection.innerHTML =   `
    <h3 id="title">Your order</h3>
    <div class="order-detail">
        <div class="food">
            <h3 class="food-name">Pizza <button class="remove-btn">remove</button></h3>
            <h3 class="food-price">$14</h3>
        </div>
    </div>

    <div class="total">
        <hr id="total-hr">

        <div class="total-detail">
            <h3 id="total-title">Total price: </h3>
            <h3 id="total-price">$23</h3>
        </div>

        <button id="pay-btn">Complete order</button>
    </div>
    `
}
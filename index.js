import { menuArray } from './data.js'

const mainSection = document.getElementById("main")

const mainHTML = menuArray.map(item => {
    const {name, ingredients, id, price, emoji} = item

    return `
    <div class="item">
        <h1 class="item-emoji">${item.emoji}</h1>
        <h3 class="item-name">${item.name}</h3>
        <i class="fa-solid fa-cart-plus"></i>
        <h5 class="item-ingredients">${item.ingredients}</h5>
        <h4 class="item-price">${item.price}</h4>
        <hr>
    </div> 
    `
}).join('')

mainSection.innerHTML = mainHTML

console.log("run!")
import { menuArray } from './data.js'


// Render food items
const mainSection = document.getElementById("main")
const totalSection = document.getElementById("total-section")

const mainHTML = menuArray.map(item => {
    const { name, ingredients, id, price, emoji } = item

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



// Order display + Total display
const ordered = []
document.addEventListener("click", function (e) {
    if (e.target.dataset.id) {
        ordered.push(menuArray.filter(food => food.id == e.target.dataset.id)[0])
        renderTotalSection(ordered)
    }

    if (e.target.dataset.remove) {
        removeItem(ordered, parseInt(e.target.dataset.remove))
    }
})

function removeItem(orderedArr, index) {
    orderedArr.splice(index, 1)
    renderTotalSection(orderedArr)
}

function renderTotalSection(orderedArr) {
    if (orderedArr.length != 0) {
        totalSection.innerHTML = '<h3 id="title">Your order</h3>'
        totalSection.innerHTML += orderedArr.map((food, index) => {
            return `
        <div class="order-detail">
            <div class="food" id="${food.id}">
                <h3 class="food-name">${food.name} <button class="remove-btn" data-remove="${index}">remove</button></h3>
                <h3 class="food-price">${food.price}</h3>
            </div>
        </div>
        `}).join('')

        renderPrice(orderedArr)
    }
    else {
        totalSection.innerHTML = ''
        renderPrice(orderedArr)
    }
}

function renderPrice(orderedArr) {
    const section = document.getElementById("calculation-section")

    if (orderedArr != 0) {
        let totalPrice = 0
        orderedArr.forEach(item => totalPrice += item.price)

        section.innerHTML = `<hr id="total-hr">
    
        <div class="total-detail">
            <h3 id="total-title">Total price: </h3>
            <h3 id="total-price">${totalPrice}</h3>
        </div>
    
        <button id="pay-btn">Complete order</button>
        `

        //Calculation for payment
        const completeOrderBtn = document.getElementById("pay-btn")
        completeOrderBtn.addEventListener("click", handlePayment)
    }
    else {
        section.innerHTML = ""
    }

}

// Payment
function handlePayment() {
    document.getElementById("payment-section").style.display = "block"

    const form = document.getElementById("payment-form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const formData = new FormData(form)
        const userName = formData.get("name")

        const endEle = document.getElementById("payment-section")
        endEle.style.display = "none"

        document.getElementById("total-section").innerHTML = ""
        document.getElementById("calculation-section").innerHTML = ""
        const message = document.getElementById("message")
        message.style.display = "block"
        message.innerHTML = `<p>Thanks ${userName}, your order is on the way</p>`
    })
}

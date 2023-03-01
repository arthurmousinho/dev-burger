const DOM = {
    container: document.querySelector('.container'),
    ordersContainer: document.querySelector('.itens-wrapper'),

    addFood(cover,title, amount) {
       let foodDiv = document.createElement('div')
       foodDiv.classList.add('food-card')
       const index = this.container.children.length
       foodDiv.innerHTML = this.foodHTML(cover,title, amount,index) 
       this.container.appendChild(foodDiv)
    },

    foodHTML(cover,title, amount,index) {
       const foodHTML = `
        <img src="${cover}" alt="" class="food-image">
            <h3>${title}</h3>
            <div class="content">
                <div>
                    <small>R$</small>
                    <p>${amount}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E1C200" fill="none" stroke-linecap="round" stroke-linejoin="round" onclick="Order.addToOrder(${index})">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
        </div>
        `
        return  foodHTML
    },

    addOrder(orderCover, orderTitle, orderAmount) {
        let orderDiv = document.createElement('div')
        const index = this.ordersContainer.children.length
        orderDiv.classList.add('order-item')
        orderDiv.innerHTML = this.orderHTML(orderCover, orderTitle, orderAmount, index)
        this.ordersContainer.appendChild(orderDiv)
    },  

    orderHTML(orderCover, orderTitle, orderAmount, index) {
        const html = `
            <img src="${orderCover}" alt="" class="cart-food-preview">   
            <p class="order-title">${orderTitle}</p>
            <div class="total">
                <small>R$</small>
                <p>${orderAmount}</p>
            </div>
            <img src="./assets/icons/remove.svg" alt="remove icon" class="icon" onclick="Order.remove(${index})">
        `

        return html
    },

    generateOrdersOnScreen() {
        for (const order of Order.orders) {
            this.addOrder(order.cover, order.title, order.amount)
        }
    }
}
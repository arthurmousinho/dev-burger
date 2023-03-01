const Cart = {
    totalAmount: document.querySelector('.order-info .total div p'),
    amountValues: [],

    init() {
        DOM.generateOrdersOnScreen()
        this.updateTotalAmount()
    },

    clear() {
        window.localStorage.clear()
        window.location.reload()
        alert("Obrigado por testar meu projeto !!")
    },

    getTotalOrdersAmount() {
        for (let order of Order.orders) {
            if (order.amount.includes(",")) {
                order.amount = order.amount.replace(',', '.')
                this.amountValues.push(Number(order.amount))
            } else {
                this.amountValues.push(Number(order.amount))
            }
        }
    },

    sumAmountValues() {
        let sum = 0
        for (const amount of this.amountValues) {
            sum = sum + amount
        }
        return sum
    },

    updateTotalAmount() {
        this.getTotalOrdersAmount()
        let total = this.sumAmountValues()
        this.totalAmount.innerHTML = total.toFixed(2)
    }
}

Cart.init()
const Order = {
    orders: Storage.get(),

    addToOrder(index) {
        const foodChosenObject = hamburgers[index]
        this.orders.push(foodChosenObject)
        alert(`🍔${foodChosenObject.title} adicionado ao pedido`)
        Storage.set(this.orders)
    },


    remove(index) {
        this.orders.splice(index, 1);
        Storage.set(this.orders)
        window.location.reload()
    }
}
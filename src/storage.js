const Storage = {
    get(){
        return JSON.parse(localStorage.getItem("devBurger:pedido")) || []
    },

    set(orderObject){
        localStorage.setItem("devBurger:pedido", JSON.stringify(orderObject))
    }
}
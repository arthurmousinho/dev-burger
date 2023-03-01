const App = {
    init() {
        for (const hamburger of hamburgers) {
            DOM.addFood(hamburger.cover,hamburger.title, hamburger.amount)
        }
    }
}

App.init()
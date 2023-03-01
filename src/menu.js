const Sidebar = {
    element: document.querySelector('.sidebar'),
    icon: document.querySelector('#menu-icon-wrapper img'),
    mainContainer: document.querySelector('main'),
    openStatus: true,

    toggle() {
        this.element.classList.toggle('active')
        this.updateLayout()
    },

    updateLayout() {
        if(this.openStatus === true) {
            this.openStatus = false
            this.mainContainer.style.marginLeft = "calc(5vw)";
        } else {
            this.openStatus = true
            this.mainContainer.style.marginLeft = "calc(20vw)";
        }
    }
}

const mobileMenu = {
    navContainer: document.querySelector('.mobile-header nav'),
    
    toggle() {
        this.navContainer.classList.toggle('on')
    }
}
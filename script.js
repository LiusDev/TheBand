window.onload=function(){
    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu');
    var headerHeight = header.clientHeight

    mobileMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }

    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
    }

    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.getElementById('modal')
    const modalContainer = document.querySelector('.js-model-container')
    const closeBtn = document.querySelector('.js-closeBtn')
    
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuyTickets)
    }

    closeBtn.addEventListener('click', closeBuyTickets)

    modal.addEventListener('click', closeBuyTickets)

    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}

function showBuyTickets() {
    modal.classList.add('open')
}

function closeBuyTickets() {
    modal.classList.remove('open')
}
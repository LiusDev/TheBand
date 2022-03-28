window.onload=function(){
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
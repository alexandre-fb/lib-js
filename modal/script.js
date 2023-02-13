const buttonOpen = document.querySelector('[data-modal="open"]')
const buttonClose  = document.querySelector('[data-modal="close"]')
const containerModal = document.querySelector('[data-modal="container"]')

function openModal() {
    containerModal.classList.add('active')
}

function closeModal() {
    containerModal.classList.remove('active')
}

function clickOutsideModal(event) {
    if(event.target === this) {
        closeModal()
        //O this é o elemento que vai receber o evento de click, nesse caso o containerModal.
    }
}

buttonOpen.addEventListener('click', openModal)
buttonClose.addEventListener('click', closeModal)
containerModal.addEventListener('click', clickOutsideModal)
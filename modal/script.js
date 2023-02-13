const buttonOpen = document.querySelector('[data-modal="open"]')
const buttonClose  = document.querySelector('[data-modal="close"]')
const containerModal = document.querySelector('[data-modal="container"]')

function initModal() {
    if (buttonOpen && buttonClose && containerModal) {
    //Validação para não travar o js todo caso não existam os elementos.
        
        function toggleModal() {
            containerModal.classList.toggle('active')
        }
        
        function clickOutsideModal(event) {
            if(event.target === this) {
                toggleModal()
                //O this é o elemento que vai receber o evento de click, nesse caso o containerModal.
            }
        }
        
        buttonOpen.addEventListener('click', toggleModal)
        buttonClose.addEventListener('click', toggleModal)
        containerModal.addEventListener('click', clickOutsideModal)
    }
}

initModal()
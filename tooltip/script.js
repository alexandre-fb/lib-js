const tooltips = document.querySelectorAll('[data-tooltip]')
console.log(tooltips)

function initTooltip() {
    if (tooltips) {
    //Validação para não travar o js todo caso não encontre o elemento.

        function createTootip(element) {
            //cria o tooltip e coloca dentro do body
            const tooltipBox = document.createElement('div')
            const tootltipText = element.getAttribute('aria-label')
            tooltipBox.classList.add('tooltip')
            tooltipBox.innerText = tootltipText
            document.body.appendChild(tooltipBox)
            return tooltipBox
        }

        function handleMouseEnter() {
            const tooltip = createTootip(this)
            //como o retorno da função é o tooltip consigo colocar ele em uma variável
            //o this é o elemento que recebe o evento usando essa função

            this.addEventListener('mousemove', (event) => {
                tooltip.style.top = event.pageY - 50 + 'px'
                tooltip.style.left = event.pageX - 25 + 'px'
                //o -50 e -25 é para mover um pouco pra longe do cursor.
            })  
            
            this.addEventListener('mouseleave', () => {
                tooltip.remove()
            })
        }

        tooltips.forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter)
        })
    }
}

initTooltip()
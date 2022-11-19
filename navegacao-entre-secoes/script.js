//Pega os ementos que serão animados
const elementsToAnimate = document.querySelectorAll('.scroll-animation') 

//Pega % da altura da tela
const screenHeightPercentage = innerHeight * 0.7

//Função de animação
function animateToScroll () {

    //Faz o loop pelos elementos que serão animados
    elementsToAnimate.forEach((element => {
        
        //Pega o valor do top do elemento
        const sectionTop = element.getBoundingClientRect().top

        //Diminui % da altura da tela do valor do top, pra nao aparecer só quando o elemento passar do topo da página
        const positionToAnimate = sectionTop - screenHeightPercentage

        //Adiciona ou remove a classe
        if(positionToAnimate < 0) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    })) 
}

window.addEventListener('scroll', () => {
    animateToScroll()
})

animateToScroll()
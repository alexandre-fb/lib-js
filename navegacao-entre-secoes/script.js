//Pega os ementos que serão animados
const elementsToAnimate = document.querySelectorAll('.scroll-animation') 

//Pega 60% da altura
const sixtyPercentScreen = innerHeight * 0.9

//Função de animação
function animateToScroll () {

    //Faz o loop pelos elementos que serão animados
    elementsToAnimate.forEach((element => {
        
        //Pega o valor do top do elemento
        const sectionTop = element.getBoundingClientRect().top

        //Diminui 60% da altura da tela do valor do top
        const positionToAnimate = sectionTop - sixtyPercentScreen

        console.log('sectionTop', sectionTop)
        console.log('heightToAnimate', positionToAnimate)

        //Adiciona ou remove a classe
        if(positionToAnimate < 0) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    })) 
}

window.addEventListener('scroll', () => {
    animateToScroll ()
})

animateToScroll ()
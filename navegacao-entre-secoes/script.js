//=====Animar seções
//Pega os ementos que serão animados
const elementsToAnimate = document.querySelectorAll('.scroll-animation') 

//Pega % da altura da tela
const screenHeightPercentage = innerHeight * 0.5

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

//=====Deixar ativo o link atual
function activeLink() {
    //Pega as seções
    const sections = document.querySelectorAll('section[id]')

    //faz o loop por cada seção
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom
        const positionToActive = sectionTop - screenHeightPercentage
        const positionToInactive = sectionBottom - screenHeightPercentage
        const sectionId = section.getAttribute('id')

        if(positionToActive < 0 && positionToInactive > 0) {
            const currentSection = document.querySelector('li a[href*=' + sectionId + ']')
            currentSection.classList.add('active')
        } else {
            const currentSection = document.querySelector('li a[href*=' + sectionId + ']')
            currentSection.classList.remove('active')
        }
    })
  }

window.addEventListener('scroll', () => {
    animateToScroll()
    activeLink()
})

animateToScroll()
activeLink()
const navHeader = document.querySelector('#nav-header')
const menuHamburger = document.querySelector('#menu-hamburger')

//abrir e frachar o menu clicando no hamburguer
menuHamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    
    navHeader.classList.toggle('active')

    const navHeaderHasActiveClass = navHeader.classList.contains('active')

    if (navHeaderHasActiveClass) {
        navHeader.setAttribute("aria-expanded", true)
    } else {
        navHeader.setAttribute("aria-expanded", false)
    }
})

//fechar ao clicar fora do menu
document.addEventListener('click', (event) => {
    if (event.target.id !== 'nav-header' && event.target.id !== 'menu-hamburger') {
        navHeader.classList.remove('active')
    }
})

//Aplicar classe active link atual
function activeLink() {

    const menuItems = document.querySelectorAll('.nav__item a')

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            menuItems.forEach(element => {
                element.parentElement.classList.remove('active')
            })
            
            if(event.target === item) {
                item.parentElement.classList.add('active')
            } 
        })
    })

    // start se tiver navegação entre seções na mesma página

    // const sections = document.querySelectorAll('section[id]')
    // const screenHeightPercentage = innerHeight * 0.6

    // sections.forEach((section) => {
    //     const sectionTop = section.getBoundingClientRect().top
    //     const sectionBottom = section.getBoundingClientRect().bottom
    //     const positionToActive = sectionTop - screenHeightPercentage
    //     const positionToInactive = sectionBottom - screenHeightPercentage
    //     const sectionId = section.getAttribute('id')

    //     if(positionToActive < 0 && positionToInactive > 0) {
    //         const currentSection = document.querySelector('li a[href*=' + sectionId + ']')
    //         currentSection.classList.add('active')
    //     } else {
    //         const currentSection = document.querySelector('li a[href*=' + sectionId + ']')
    //         currentSection.classList.remove('active')
    //     }
    // })

    // end se tiver navegação entre seções na mesma página
}

activeLink()
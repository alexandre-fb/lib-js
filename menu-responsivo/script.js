const navHeader = document.querySelector('[data-menu="nav"')
const btnHamburger = document.querySelector('[data-menu="hamburger"]')

const html = document.querySelector('html')

if(navHeader && btnHamburger) {
    //Validação para não travar o js todo caso não encontre os elementos.
    
    btnHamburger.addEventListener('click', handleClick)

    function handleClick(event) {
        if(!navHeader.classList.contains('active')) {
            event.stopPropagation();
            showMenu()
        }

        clickOutside()

        function clickOutside() {
            html.addEventListener('click', clickOutside)

            function clickOutside(event) {
                const menuBackground = document.querySelector('[data-menu="menu"]')
                
                //Condicional para não fechar o menu caso clique em alguma parte do menu que não seja o link.
                if(event.target === menuBackground) {
                    event.stopPropagation()
                    return
                }

                closeMenu()
                html.removeEventListener('click', clickOutside)
            }
        }
    }

    function showMenu() {
        navHeader.classList.add('active')
        btnHamburger.setAttribute("aria-expanded", true)
    }

    function closeMenu() {
        navHeader.classList.remove('active')
        btnHamburger.setAttribute("aria-expanded", false)
    }

    //Aplicar classe active no link clicado
    activeClickedLink()

    function activeClickedLink() {

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

        // Adicionar active na seção atual, se tiver navegação entre seções na mesma página

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
}




//Seleciona as duas listas
const tabMenu = document.querySelectorAll('.js-tab-menu li');
const tabContent = document.querySelectorAll('.js-tab-content li');

//Verifica se as listas não estão vazias
if (tabMenu.length && tabContent.length) {

    //Limpa a classe active de todos os items e adicona a classe active no que foi clicado.
    function activeTab(index) {
        tabContent.forEach((content) => {
            content.classList.remove('active')
        })
        tabContent[index].classList.add('active')

        tabMenu.forEach((menu) => {
            menu.classList.remove('active')
        })
        tabMenu[index].classList.add('active')
    }

    //Adiciona evento de clique no menu e passa o index certo para ativar nas listas
    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index)
        })
    })
}

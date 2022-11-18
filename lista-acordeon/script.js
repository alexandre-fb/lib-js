//Pega a lista de items
const accordionList = document.querySelectorAll('.js-accordion .accordion__item')

//Faz o loop pela lista de items
accordionList.forEach((item) => {

    //Adiciona o evento de click no primeiro elemento de cada item
    item.firstElementChild.addEventListener('click', () => {

        //Faz o loop por cada elemento dentro do item pra adicionar e remover a classe active. O Array.from transforma o HTML Collection (tipo do retorno do item.children) em Array e permite usar as propriedades e métodos de Array, que nesse caso é o forEach.
        Array.from(item.children).forEach((element) => {
            element.classList.toggle('active')
        })
    })
})
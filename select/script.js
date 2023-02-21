
function initStyledSelect() {
    
    const wrapper = document.querySelector('[data-select="wrapper"]')
    const select = document.querySelector('[data-select="select"]')
    const html = document.querySelector('html')
    
    if (wrapper && select) {
        //Validação para não travar o js todo caso não encontre os elementos.
        
        wrapper.addEventListener('click', showOptions)

        function showOptions(event) {
            if(!wrapper.classList.contains('active')) {
                event.stopPropagation();
                wrapper.classList.add('active')
            }

            const optionSelectedText = event.target.textContent
        
            if(event.target.className === 'option' && select.textContent !== optionSelectedText) {

                //Muda o texto do select para o texto do option selecionado
                select.innerText = ''
                select.append(optionSelectedText)

                //Ação que quer realizar ao clique
                const title = document.querySelector('h1')
                title.innerText = ''
                title.append('Selecionou ' + '"' + optionSelectedText + '"')
            }   

            //fechar os options ao clicar fora
            html.addEventListener('click', closeOptions)
            
            function closeOptions(event) {
                wrapper.classList.remove('active')
                html.removeEventListener('click', closeOptions)
    
                //se eu quiser que as options não fechem ao selecionar uma delas, posso usar a condição abaixo
    
                // if(!wrapper.contains(event.target) || event.target === select) {
                //     wrapper.classList.remove('active')
                //     html.removeEventListener('click', closeOptions)
                // }
            }         
        }
    }
}

initStyledSelect()
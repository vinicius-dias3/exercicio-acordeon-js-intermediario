let perguntas = document.querySelectorAll('.perguntas');

perguntas.forEach(function (item){
    item.addEventListener('click', function () {
        let itemAtivoAtual = document.querySelector('.ativo');
        
        if(itemAtivoAtual){
            itemAtivoAtual.classList.remove('ativo');
        }
        
        item.classList.add('ativo');
    });
});
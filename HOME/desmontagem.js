let pesquisarbox = document.querySelector('.barra-pesquisa');
let lupapesquisa = document.querySelector('.lupa');
let btnfechar = document.querySelector('.fechar')

lupapesquisa.addEventListener('click', ()=> {
    pesquisarbox.classList.add('ativar')
})

btnfechar.addEventListener('click', ()=> {
    pesquisarbox.classList.remove('ativar')

    
})


function pesquisar() {
    let pesquisa = document.getElementById('procurar').value.toLowerCase();
    let x = document.getElementsByClassName('titulos');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(pesquisa)) {
            x[i].style.background = "none";
        } else {
            x[i].style.background = "red";
        }
    }
}



function fhecarar(){
    let btnfechar = document.querySelector('.fechar')  
    let x = document.getElementsByClassName('titulos');

    btnfechar.addEventListener('click',()=>{
   x.classList.remove('pesquisar')
    })
}
     








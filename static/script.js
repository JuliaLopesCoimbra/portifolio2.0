//abre e fecha mobile
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
        ? menuMobile.classList.replace('bi-list', 'bi-x')
        : menuMobile.classList.replace("bi-x", "bi-list")
    //adiciona uma classe nova
    body.classList.toggle("menu-nav-active")
})

//fecha o menu quando clicar em algum item e muda o icone para list
const navItem = document.querySelectorAll('.nav-item')
//navItem é um array pois são 6 itens
navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

//animar todos os atributos da tela que tiverem meu atrbuto data-animation

const item = document.querySelectorAll("[data-animation]");

const animeScroll = () =>{
    //adicionando a variavel window com o valor do px quando a tela está la no top
    const windowTop = window.pageYOffset + window.innerHeight*0.85// inner heiht é uma mergem, n espera chegar tudo, anima antes de chegar tudo
    //para cada item que possui a data-animation possuir a altura em px que está do topo menor que o topo da tela em px vai receber a classe feita lá no css
    item.forEach(element =>{
        //offsetTop é a altura que o elemento está do topo
        //entao se o top da minha tela for maior que a diferença que o elemento tem do seu topo até a tela recebe a classe do css
        //ent quando chegar no elemento ele anima ele
        if(windowTop > element.offsetTop){
            element.classList.add("animate")
        }else{
            //ent se n estiver no topo ele remove pq quando ele voltar para o topo e descer de novo acontece de novo
            element.classList.remove("animate")
        }
    })
}

animeScroll();
//pegando o scroll da tela através de uma funcao chamando ela animesCROLL
window.addEventListener("scroll",()=>{
    animeScroll()
})
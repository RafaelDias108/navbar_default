const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    // verifica se o tipo de evento é 'touchstart'
    if(event.type === 'touchstart') event.preventDefault()

    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    
    // verifica se contém a classe "active" para mudar o icone do botão
    const btnMobile = document.getElementById('btn-mobile');
    if(navbar.classList.contains("active")){
        event.currentTarget.setAttribute('arial-expanded', 'true');
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        btnMobile.children[0].attributes[1].value = "close-outline";
    }else{
        event.currentTarget.setAttribute('arial-expanded', 'false');
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        btnMobile.children[0].attributes[1].value = "menu-outline";
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

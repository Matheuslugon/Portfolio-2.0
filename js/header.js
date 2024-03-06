  // Resgata todos os links do menu
  const links = document.querySelectorAll('.menu-mobile li a');

  // Inicia o a API do Offcanvas
  const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasNavbar')

  for (var i = 0; i < links.length; i++) {
    // A cada item no loop, adicionamos um addEventListener
    // docs: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

    links[i].addEventListener("click", (event) => {

      // Resgatamos o valor do href
      window.location = event.target.href;

      // Existe um problema de conflito entre fechar o modal e completar o scroll.
      // Foi adicionado um timeout para aguardar a animação do scroll e logo após fechar o menu
      // docs: https://www.w3schools.com/jsref/met_win_settimeout.asp
      setTimeout(() => bsOffcanvas.hide(), 350)
    },
      false);
  }


var AUTOHIDE = Boolean(0);
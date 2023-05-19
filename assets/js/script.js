//Tooltip Navbar 
$('[data-toggle="tooltip"]').tooltip()


//Redireccionamiento de la Barra de Navegación 
$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
      {
        scrollTop: $(gato).offset().top,
      },
      800
    );
  });
});
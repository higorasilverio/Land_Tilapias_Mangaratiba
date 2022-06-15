$(document).ready(function () {
  function balancoMar() {
    $(".img-mar").animate({ bottom: "-39.7vh" }, 1000, "linear", function () {
      $(".img-mar").animate({ bottom: "-40vh" }, 1000, "linear", function () {
        $(".img-mar").animate(
          { bottom: "-40.3vh" },
          1000,
          "linear",
          function () {
            $(".img-mar").animate(
              { bottom: "-40vh" },
              1000,
              "linear",
              function () {
                balancoMar();
              }
            );
          }
        );
      });
    });
  }
  balancoMar();

  var posicaoSolPx = $(".img-sol").css("bottom");
  var tamanhoPosicaoSol = posicaoSolPx.split("").length;
  var posicaoSolAbsoluta = parseFloat(
    posicaoSolPx
      .split("")
      .splice(1, tamanhoPosicaoSol - 3)
      .join("")
  );

  $(window).scroll(function () {
    var alturaTela = $(window).height();
    var posicaoTela = $(window).scrollTop();
    if (posicaoTela < alturaTela / 1.2) {
      var velocidadeScroll = posicaoTela / 2.8;
      if (alturaTela > 700) {
        velocidadeScroll = posicaoTela / 1.8;
      }
      var novaPosicaoSolPx = ((posicaoSolAbsoluta + velocidadeScroll) * -1)
        .toString()
        .concat("px");
      $(".img-sol").css("bottom", novaPosicaoSolPx);
    }
  });

  $(".premios-slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

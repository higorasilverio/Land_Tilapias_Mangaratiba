$(document).ready(function () {
  function balancoMar() {
    $(".img-mar").animate({ bottom: "-8.7vw" }, 1000, "linear", function () {
      $(".img-mar").animate({ bottom: "-9vw" }, 1000, "linear", function () {
        $(".img-mar").animate(
          { bottom: "-9.3vw" },
          1000,
          "linear",
          function () {
            $(".img-mar").animate(
              { bottom: "-9vw" },
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
    if (posicaoTela < alturaTela / 2) {
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
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

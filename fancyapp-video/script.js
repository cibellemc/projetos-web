$(document).ready(function () {
    var numberOfLinks = $("a.miniatura-camera").length;

    // Calcula o width com base no número de elementos
    var colWidth = 100 / numberOfLinks*2 + "%";

    // Define o width das col-4
    $(".col-4").css("width", colWidth);

    $(".miniatura-camera").fancybox({
        buttons: [
            "fullScreen",
            "close"
        ]
    });
});

$(document).ready(function () {
    const imgBox = document.querySelector('.img-box');
    const containerImgs = imgBox.querySelectorAll('.container-img');
    const numContainers = containerImgs.length;

    // número desejado de colunas e linhas
    const numCols = 3;
    const numRows = Math.ceil(numContainers / numCols);

    // porcentagens com base no número de colunas e linhas
    const widthPercentage = 100 / numCols;
    const heightPercentage = 100 / numRows;

    // porcentagens de altura e largura aos elementos .container-img
    containerImgs.forEach(function (container) {
        container.style.width = `calc(${widthPercentage}% - 2px)`; // Subtrai 2px para acomodar as bordas
        container.style.height = `calc(${heightPercentage}% - 2px)`; // Subtrai 2px para acomodar as bordas
    });

    $(".miniatura-camera").fancybox({
        buttons: [
            "fullScreen",
            "close"
        ]
    });
});

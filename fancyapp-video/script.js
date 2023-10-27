$(document).ready(function () {
    $("[data-fancybox='gallery']").fancybox({
        buttons: [
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        thumbs: {
            autoStart: true,
            axis: "y"
        },
        onInit: function (instance) {
            instance.$refs.toolbar.find('[data-fancybox-play]').hide();
        }
    });
});
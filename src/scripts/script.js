function WhaleRotate() {
    let first = true;
    let paused = false;

    $('#title_img').on('mouseenter', function () {
        if (first) {
            $(this).addClass('spin');
            first = false;
        }

        if (paused) {
            $(this).removeClass('pause');
            paused = false;
        }
    });

    $('#title_img').on('mouseleave', function () {
        $(this).addClass('pause');
        paused = true;
    });
}

$(function () {
    WhaleRotate();
});
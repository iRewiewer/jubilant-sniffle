function gotoPage3(buttonId) {
    $('button').fadeOut(200, function () {
        localStorage.setItem('player', buttonId);
        window.location.href = 'page3.html';
    });
}

$(function () {
    $('body').fadeIn(500);
});
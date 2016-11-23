var points = document.getElementsByClassName('point');
var forEach = function (callback) {
    for (var i = 0; i < points.length; i++) {
        callback(i);
    }
}
// Bespoke.js
var deck = bespoke.from('article', [
    bespoke.plugins.classes(),
    bespoke.plugins.bullets('li, .bullet'),
    bespoke.plugins.backdrop(),
    bespoke.plugins.scale(),
    bespoke.plugins.hash(),
    bespoke.plugins.progress(),
    bespoke.plugins.state(),
    //bespoke.plugins.keys(),
    bespoke.plugins.touch(),
    bespoke.plugins.jumpy()
]);

(function preloadBackgroundImages() {

    var matches, image,
    forEach = function(arrayLike, fn) {
        arrayLike || [].slice.call(arrayLike, 0).forEach(fn);
    };

    forEach(document.styleSheets, function(sheet) {
        forEach(sheet.rules, function(rule) {
            if (rule.style && rule.style.backgroundImage) {
                matches = rule.style.backgroundImage.match(/url\((.*)\)/);
                if (matches) {
                    image = new Image();
                    image.src = matches[1];
                }
            }
        });
    });

}());

(function bespokeRemot() {

    document.addEventListener('keyup', function(e) {
        if (e.which == 39) // SWIPERIGHT
            deck.next();
        if (e.which == 37) // SWIPELEFT
            deck.prev();
        if (e.which == 38) // SWIPEUP
            deck.first();
        if (e.which == 40) // SWIPEDOWN
            deck.last();
    });

    document.addEventListener('click', function(e) {
        deck.next();
        return false;
    });

    document.addEventListener('contextmenu', function (e) { 
        deck.prev();
        return false;
    });

}());

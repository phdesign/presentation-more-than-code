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

(function bespokeRemot() {

    document.addEventListener('keyup', function(e) {
        if (e.which == 34 ||    // PAGE DOWN, logitech:NEXT
            e.which == 39 ||    // RIGHT, remot.io:SWIPERIGHT
            e.which == 32)      // SPACE
            deck.next();
        if (e.which == 33 ||    // PAGE UP, logitech:PREV
            e.which == 37)      // LEFT, remot.io:SWIPELEFT
            deck.prev();
        if (e.which == 116 ||   // F5, logitech:PLAY
            e.which == 38)      // remot.io:SWIPEUP
            deck.first();
        if (e.which == 190 ||   // PERIOD, logitech:PAUSE
            e.which == 40)      // remot.io:SWIPEDOWN
            deck.last();
    });

}());

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

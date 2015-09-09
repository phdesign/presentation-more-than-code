// Bespoke.js
bespoke.from('article', [
    bespoke.plugins.classes(),
    bespoke.plugins.bullets('li, .bullet'),
    bespoke.plugins.backdrop(),
    bespoke.plugins.scale(),
    bespoke.plugins.hash(),
    bespoke.plugins.progress(),
    bespoke.plugins.state(),
    bespoke.plugins.keys(),
    //bespoke.plugins.touch()
]);

(function preloadBackgroundImages() {

    var matches, image,
    forEach = function(arrayLike, fn) {
        [].slice.call(arrayLike, 0).forEach(fn);
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

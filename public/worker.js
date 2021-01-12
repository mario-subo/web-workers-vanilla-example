// EXAMPLE 1: ===================
// self.postMessage('Hello World!');
























// EXAMPLE 2: ===================

function heavilyComputatedValue() {
    var x = 0;
    for (var i = 0; i < 999999999; i++) {
        x = x + i;
    }
    return x;
}

self.addEventListener('message', function(event) {
    var x = heavilyComputatedValue();
    self.postMessage(x);
})
var worker = new Worker('worker.js');

// EXAMPLE 1: ===================
// listen to message event of worker
worker.addEventListener('message', function(event) {
    var resultsElement = document.getElementById('result');
    resultsElement.innerHTML = 'message received from worker => ' + event.data;
});

// listen to error event of worker
worker.addEventListener('error', function(event) {
    console.error('error received from worker => ', event);
});
















// EXAMPLE 2: ===================

// Example of a heavy computation which would block the UI if executed on the main thread
function heavilyComputatedValue() {
    var x = 0;
    for (var i = 0; i < 999999999; i++) {
        x = x + i;
    }
    return x;
}


// load results from web worker
function loadResult() {
    // add loading text until `message` event listener replaces it
    var resultsElement = document.getElementById('result');
    resultsElement.innerHTML = 'loading...';





    // EXAMPLE 2.1: Blocking the UI on the main thread ===================
    // var x = heavilyComputatedValue();
    // resultsElement.innerHTML = `message received on main thread => ` + x;







    // EXAMPLE 2.2: Use the logic from Worker parallel thread ===================
    // emit message event to worker
    // worker.postMessage(null); // we don't need payload here
};

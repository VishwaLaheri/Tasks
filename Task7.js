function Debounce(func, delay) {
    let timeoutId;

    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

function logMessage() {
    console.log("Debounced function executed");
}

const debounced = Debounce(logMessage, 2000);

document.getElementById("debounceBtn").addEventListener("click", debounced);
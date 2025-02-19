function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Apple", "Banana", "Orange"]);
        }, 3000);
    });
}

fetchData().then((items) => {
    console.log("Items received:", items);
});

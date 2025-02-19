function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) { 
                resolve(["USA", "CANADA", "PARIS"]);
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

async function handleFetch() {
    try {
        console.log("Fetching data...");
        const items = await fetchData(); 
        console.log("Items received:", items);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleFetch();
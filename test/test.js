const promise = new Promise((reslove, reject) => {
    setTimeout(reslove, 1000, 'done');
});

promise.then(() => {
    console.log(`------reslove------`);
})

const getJSON = (url) => {
    const promise = new Promise((reslove, reject) => {
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if(this.readyState !== 4) {
                return;
            }
            if(this.status === 200) {
                reslove(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
};

getJSON("http://localhost:8080/test.json");
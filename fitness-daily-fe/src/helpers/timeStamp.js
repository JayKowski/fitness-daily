function timeStamp() {
    let t = new Date();
    let hours = t.getHours();
    let minutes = t.getMinutes() + 1;
    let seconds = t.getSeconds() + 1;
    let date = t.getDate();
    let month = t.getMonth() + 1;
    let year = t.getFullYear();

    return (`${hours}-${minutes}-${seconds}-${date}-${month}-${year}`)
        // return (`the time is ${hours}:${minutes}:${seconds} on ${date}-${month}-${year}`);
}

export default timeStamp;
function titleCase(str) {
    let arrWrds = str.split(" ");
    let capWrds = []
    for(let str in arrWrds) {
        capWrds[str] = arrWrds[str]
            .toLowerCase()
            .replace(0, arrWrds[str].charAt(0).toUpperCase());
    }
    return capWrds.join(" ");
}

console.log(titleCase("I'm a little tea pot"))
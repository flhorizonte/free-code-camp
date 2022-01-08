function repeatStringNumTimes(str, num) {
    if(!(num > 0)) {
        return ''
    }
    let new_str = ''
    for(let rp = 0; rp < num; rp++) {
        new_str += str
    }

    return new_str
}

const string = repeatStringNumTimes("abc", 3)

console.log(string)
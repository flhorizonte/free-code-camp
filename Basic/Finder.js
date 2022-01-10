function findElement(arr, func) {
    let num = 0;
    for(let it = 0; it < arr.length; it++) {
        num = arr[it]
        if(func(num)){
            return num
        }
    }

    return undefined
}

console.log(findElement([1,2,3,4], num => num % 2 === 0))
function frankenSplice(arr1, arr2, n) {
    //copiar para o arr2 elementos do arr1
    let arr = arr2.slice();
    for(let it = 0; it < arr2.length; it++){
        arr.splice(n, 0, arr1[it]);
        n++
    }
    return arr;
}

console.log(frankenSplice([], [1,2,3,4], 3));
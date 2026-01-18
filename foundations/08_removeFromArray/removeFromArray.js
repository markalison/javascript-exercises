const removeFromArray = function(arr, ...indexes) {
    let newarr = [];

    for (let i=1; i <= arr.length; i++) {
        if (!indexes.includes(i)) {
            newarr.push(arr[i-1]);
        }
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;

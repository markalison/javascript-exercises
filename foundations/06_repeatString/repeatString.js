const repeatString = function(string, num) {
    let arr = []
    arr[0] = string;
    
    if (num > 0 ) {
        for (let i = 1; i < num; i++) {
            arr.push(arr[0]);  
        }
        string = arr.join("");
        return string
    } else {
        return 'ERROR';
    }
    
};



// Do not edit below this line
module.exports = repeatString;



const convertToCelsius = function(tempf) {
    let tempc = (tempf-32)*(5/9);
    tempc = parseFloat(tempc.toFixed(1));
    return tempc;
};

const convertToFahrenheit = function(tempc) {
  let tempf = tempc * (9/5) +32;
  tempf = parseFloat(tempf.toFixed(1));
  return tempf;
};

console.log(convertToCelsius(99));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

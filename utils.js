function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
//default export
// module.exports = generateNumber;

//exporting more than one value
function celciusToFahrenheit(celcius) {
  return ((celcius * 9) / 5) * 32;
}

// using module object
module.exports = {
  generateNumber,
  celciusToFahrenheit,
};

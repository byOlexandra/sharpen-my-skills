const price = 500.6030606;
console.log(price.toFixed(2));

const country = "Ukraine";
console.log(country.concat(price));

const str = "hello!";
const strPaddedStart = str.padStart(9, "*");
console.log(strPaddedStart);
console.log(str.padEnd(9, "-"));





const broken = "/uD83D"; // це тільки перша половина "😊"
console.log(broken.isWellFormed()); 
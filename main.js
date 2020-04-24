// Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.Value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePasswords(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

generatePasswords = (lower, upper, number, symbol, length) => {

}

// Generator function
getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}
console.log("getRandomLower -> ", getRandomLower())

getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log("getRandomUpper -> ", getRandomUpper())

getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log("getRandomNumber -> ", getRandomNumber())

getRandomSymbol = () => {
  const symbols = '!@#$%^&*()_+<>/<='
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log("getRandomSymbol -> ", getRandomSymbol())


//1
function logitems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logitems(["Mango", "Poly", "Ajax"]);

//2

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

//3
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Short text"));

console.log(
  formatString(
    "This is a very very very very very long text that should be trimmed"
  )
);

//5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best SALE offers now!"));
console.log(checkForSpam("Beware of SPAM messages"));
//6

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число (або натисніть Cancel для виходу):");

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Було введено не число, попробуйте ще раз");
  } else {
    numbers.push(input);
  }
} while (true);

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

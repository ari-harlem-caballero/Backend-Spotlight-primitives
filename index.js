const sentence = 'alchemy rocks gold';

function reverseWords(sentence) {
  const words = sentence.split(' ').map((word) => {
    let letters = word.split('').reverse();
    letters = letters.join('');

    return letters;
  }).join(' ');

  return words;
}

const num1 = 121;
const num2 = 41;

function oddishOrEvenish(num) {
  let num1 = num.toString().split('');

  let sum = 0;

  for (let i = 0; i < num1.length; i++) {
    sum +=  Number(num1[i]);
  }
  if (sum % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}
console.log(oddishOrEvenish(num2));
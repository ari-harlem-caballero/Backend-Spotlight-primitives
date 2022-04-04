const sentence = 'alchemy rocks gold';

function reverseWords(sentence) {
  const words = sentence.split(' ').map((word) => {
    let letters = word.split('').reverse();
    letters = letters.join('');

    return letters;
  }).join(' ');

  return words;
}


console.log(reverseWords(sentence));
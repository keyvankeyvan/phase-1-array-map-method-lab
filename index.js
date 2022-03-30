const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const moddedTutorials = tutorials.map(phrase => {
    // RETURNS AN ARRAY OF SPLIT WORDS
    const splitPhrase = phrase.split(' ')

    // UPPERCASES FIRST LETTER OF EACH WORD
    const upperCasedArr = splitPhrase.map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })

    // WE JOIN THE WORDS W/ A SPACE IN BETWEEN
    return upperCasedArr.join(' ')
  })

  // RETURN THE NICE ARRAY TO THE MAIN .MAP
  //console.log(moddedTutorials)
  return moddedTutorials
}

//console.log(titleCased())
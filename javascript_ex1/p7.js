let lexicon={
    "merry":"feliz",
    "christmas": "navidad",
  "happy": "feliz"
};

function translateWord(word)
{
    return lexicon[word.toLowerCase()] || word;
}

console.log(translateWord("christmas"),translateWord("happy"));
  
  
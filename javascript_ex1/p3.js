function isVowel(ch) {
  ch = ch.toLowerCase();
  return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}
console.log(isVowel('b')); // true

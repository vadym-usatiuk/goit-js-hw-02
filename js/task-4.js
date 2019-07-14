// Задание 4
// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и 
// возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for(let i = 0; i < stringSplit.length; i++){
      if(stringSplit[i].length > longestWord){
      longestWord = stringSplit[i].length;
       }
    }
    return longestWord;
  }
  
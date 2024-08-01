const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let long = 0;
  for (let i = 0; i < avengers.length; i++) {
    if (avengers[i].lenghth > long) {
      long = avengers[i].length;
      findLongestWord = avengers[i];
    }
  }
}
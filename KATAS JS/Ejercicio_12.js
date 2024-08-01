const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicates = [];
duplicates.forEach((item) => {
    if (!removeDuplicates.includes(item)) {
      removeDuplicates.push(item);
    }
})

console.log(removeDuplicates)
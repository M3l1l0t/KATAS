const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array, value) {
  const index = array.indexOf(value);
    if (index !== -1) {
    return { exists: true, position: index };
  } else {
    return { exists: false };
  }
}
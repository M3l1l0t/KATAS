const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ];

  const noCat =[]
  for (let i = 0; i < toys.length; i++) {
    if (!toys[i].name.includes('gato')) {
        noCat.push(toys[i]);
    }
}
console.log("Toys without cat:", noCat);
  
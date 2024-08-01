const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    console.log("Pelicula pequeña:" + movies[i].name);
  }
}

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200) { 
    console.log("Pelicula mediana:" + movies[i].name);
  }
}

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes > 200) { 
    console.log("Pelicula grande:" + movies[i].name);
  }
}
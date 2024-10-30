const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
  people.forEach(({name}) => console.log(name)); // ho usato il metodo foreach per stampare nomi ma ora uso il map per otenere una stringa dai nomi delle persone


  // ---metodo map()----//

let names = "";
names=people.map(({name}) => name).join( "," );
console.log(names);
//console.log(process);
//console.log(process.env);

//DESCTRUCTURACION DE OBJETOS

// const { env: { PORT, DB_USER, DB_PASS, SHELL } } = process;
// console.table(SHELL + ' ' + PORT + ' ' + DB_USER + ' ' + DB_PASS);

// const characters = ['Goku', 'Vegeta', 'Trunks'];
// const [_, __, trunks] = characters;

// console.log(trunks);

const characters = ['Goku', 'Vegeta', 'Bulma', 'Trunks'];
const [, , , trunks] = characters;


console.log(trunks);


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Marco",
  surname: "Peroni",
  age: 28
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "Javascript"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("React");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Inglese");
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  return randNum;
}

let diceResult = dice();
console.log("Dice result is: " + diceResult)

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Numbers are on pairs"
  }
}

let result = whoIsBigger(2001, 2024); 
console.log("Highest number is " + result);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  let wordsArray = str.split(" ");
  return wordsArray;
}
let risultato = splitMe("I love coding");
console.log(risultato);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, deleteFirst) {
  if (deleteFirst) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

let tru = deleteOne("True", true);
console.log(tru);
let fols = deleteOne("False", false);
console.log(fols);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  const stringWithoutNumbers = str.replace(/\d/g,"");
  return stringWithoutNumbers;
}

const gatti = onlyLetters("i have 44 cats");
console.log(gatti);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(input) {
  let result = input.includes("@");
  console.log("The Email is " + result);
  return result;
}

isThisAnEmail("email@example.com");
isThisAnEmail("example.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const currentDate = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

const currentDay = whatDayIsIt(); 
console.log("Today is: " + currentDay);


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num) {
  const result = {
    sum: 0,
    values: []
  };
  
  for (let i = 0; i < num; i++) {
    const rollValue = dice();
    result.sum += rollValue;
    result.values.push(rollValue);
  }
  return result;
}

const rollResult = rollTheDices(1);
console.log(rollResult);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(targetDate) {
  const currentDate = new Date();
  const timeDifference = currentDate - targetDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const targetDate = new Date('0000-01-01');
const daysPassed = howManyDays(targetDate);
console.log(daysPassed + " Days have passed.");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(birthday) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const birthdayDay = birthday.getDate();
  const birthdayMonth = birthday.getMonth() + 1;
  return currentDay === birthdayDay && currentMonth === birthdayMonth;
}

const myBirthday = new Date ("2024-26-10");
const isBirthdayToday = isTodayMyBirthday(myBirthday);

console.log("Is today my birthday? " + isBirthdayToday);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj, [propToDelete];
  }
  return obj;
}

const movie = {
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
};

const updateMovie = deleteProp(movie, 'imdbID');

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {

  const sortedMovies = movies.slice().sort((a, b) => b.Year - a.Year);
  return sortedMovies[0];
}

const mostRecentMovie = newestMovie(movies);
console.log(mostRecentMovie);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
}

const numberOfMovies = countMovies(movies);
console.log("The number of movies is " + numberOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  const yearsArray = movies.map(movie => movie.Year);
  return yearsArray;
}

const yearsOfMovies = onlyTheYears(movies);
console.log("Years of movies are: " + yearsOfMovies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = movies.filter(movie => {
    const releaseYear = parseInt(movie.Year, 10);
    return releaseYear >= 1000 && releaseYear <= 1999;
  });
   
  return lastMillenniumMovies;
}

const lastMilleniumMovies = onlyInLastMillennium(movies);
console.log(lastMilleniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  const totalYears = movies.reduce((sum, movie) => sum + parseInt(movie.Year, 10), 0);
  return totalYears;
}

const sumOfYears = sumAllTheYears(movies);
console.log("Sum of all of the Years is: ", sumOfYears)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(keyword, movies) {
  const matchingMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(keyword.toLowerCase()) 
  );

  return matchingMovies;
}

const searchTerm = "The Lord of the Rings";
const matchingMovies = searchByTitle(searchTerm, movies);
console.log(matchingMovies);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(keyword, movies) {
  const result = movies.reduce((acc, movie) => {
    if (movie.Title.toLowerCase().includes(keyword.toLowerCase())) {
      acc.match.push(movie);
    } else {
      acc.unmatch.push(movie);
    }
    return acc;
  }, { match: [], unmatch: [] });
  return result;
}

const searchTer = "The Lord of the Rings";
const dividedMovies = searchAndDivide(searchTerm, movies);
console.log("Match:" , dividedMovies.match);
console.log("Unmatch:" , dividedMovies.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(indexToRemove, movies) {
  const updateMovies = movies.filter((movie, index) => index!== indexToRemove);
  return updateMovies;
}

const indexToRemove = 3;
const moviesWithoutIndex = removeIndex(indexToRemove, movies);
console.log(moviesWithoutIndex);


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainerElement() {
  const containerElement = document.getElementById("container");
  return containerElement;
}

const container = selectContainerElement();
console.log(container);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTdElements() {
  const tdElements = document.querySelectorAll("td");
  return [...tdElements];
}

const allTdElements = selectAllTdElements();
console.log(allTdElements);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTextInTdElements() {
  const tdElements = document.querySelectorAll("td");
  for (let i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].textContent);
  }
}

printTextInTdElements(); 

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function redBackground () {
  const linkElements = document.querySelectorAll("a");
  for (let i = 0; i < linkElements.length;i++) {
    linkElements[i].style.backgroundColor = "red";
  }
}

redBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addElementToMyList(newText) {
  const newListItem = document.createElement("ul");
  newListItem.textContent = newText;
  const myList = document.getElementById("myList");
  myList.appendChild(newListItem);
}

addElementToMyList("Lista aggiunta con JavaScript"); 

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearMyList() {
  const myList = document.getElementById("myList");
  myList.innerHTML = '';
}

clearMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToRows() {
  const trElements = document.querySelectorAll("tr");
  for (let i = 0; i < trElements.length; i++) {
    trElements[i].classList.add("test");
  }
}

addClassToRows();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let row ='';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

// const movies = [
//   {
//     Title: 'The Lord of the Rings: The Fellowship of the Ring',
//     Year: '2001',
//     imdbID: 'tt0120737',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
//   },

//   {
//     Title: 'The Lord of the Rings: The Return of the King',
//     Year: '2003',
//     imdbID: 'tt0167260',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Two Towers',
//     Year: '2002',
//     imdbID: 'tt0167261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of War',
//     Year: '2005',
//     imdbID: 'tt0399295',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lords of Dogtown',
//     Year: '2005',
//     imdbID: 'tt0355702',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings',
//     Year: '1978',
//     imdbID: 'tt0077869',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1990',
//     imdbID: 'tt0100054',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lords of Salem',
//     Year: '2012',
//     imdbID: 'tt1731697',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
//     Year: '1984',
//     imdbID: 'tt0087365',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1963',
//     imdbID: 'tt0057261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Avengers',
//     Year: '2012',
//     imdbID: 'tt0848228',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Infinity War',
//     Year: '2018',
//     imdbID: 'tt4154756',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Age of Ultron',
//     Year: '2015',
//     imdbID: 'tt2395427',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Endgame',
//     Year: '2019',
//     imdbID: 'tt4154796',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
//   },
// ]

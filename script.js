// Esercizio 1
const title = document.querySelector('#titolo-principale');
// const button = document.querySelector('button'); 

// Esercio 2
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const button = document.querySelector('button');

h1.innerHTML = "Benvenuto nel mio sito!"
p.innerHTML = "Sito rinnovato con JavaScript";
button.innerHTML = "Inizia ora";

// Esercizio 3

const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];
const lista = document.querySelector('#spesa');

lista.innerHTML = ' ';
// Ciclo for
/* for(let i = 0; i < spesa.length; i++) {
    lista.innerHTML += `<li> ${spesa[i]} </li>`;
}  */

// forEach
spesa.forEach(cibo => {
    lista.innerHTML += `<li>${cibo}</li>`;
});

// Esercizio 5
const table = document.getElementById('corpo-tabella');

const utenti = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
    { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
    { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
];

const tableElements = utenti.map(utente => 
    `<tr>
        <td>
            ${utente.nome}
        </td>
        <td>
            ${utente.cognome}
        </td>
        <td>
            ${utente.email}
        </td>
        <td>
            ${utente.citta}
        </td>
    </tr>`
).join('');

table.innerHTML = tableElements;


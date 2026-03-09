/*
Obiettivi del Programma
Logica Prezzo Unitario:

Sotto i 12 anni: 6€
Sopra i 65 anni: 7€
Tutti gli altri: 10€

Validazione Accesso:

Per i film di categoria "Horror", l'accesso è consentito solo se l'utente ha almeno 18 anni.

Processo di Elaborazione:
Scorri l'array e verifica per ogni utente se può vedere il film scelto.
Se può vederlo, calcola il costo totale (prezzo unitario × posti) e conferma la prenotazione.
Se non può vederlo, comunica il rifiuto.

Resoconto Finale:
Al termine di tutte le verifiche, stampa l'incasso totale generato solo dalle prenotazioni confermate.
*/

const prenotazioni = [
  { utente: "Luigi", eta: 14, film: "I Minions", categoria: "Animazione", posti: 3 },
  { utente: "Elena", eta: 22, film: "Scream", categoria: "Horror", posti: 1 },
  { utente: "Marco", eta: 17, film: "IT", categoria: "Horror", posti: 2 },
  { utente: "Sofia", eta: 66, film: "Oppenheimer", categoria: "Drammatico", posti: 2 },
  { utente: "Giulia", eta: 10, film: "Spider-Man", categoria: "Azione", posti: 5 },
  { utente: "Andrea", eta: 18, film: "The Conjuring", categoria: "Horror", posti: 1 },
  { utente: "Luca", eta: 15, film: "Fast & Furious", categoria: "Azione", posti: 2 },
  { utente: "Marta", eta: 70, film: "Frozen 2", categoria: "Animazione", posti: 1 },
  { utente: "Pietro", eta: 25, film: "Saw", categoria: "Horror", posti: 3 },
  { utente: "Alice", eta: 12, film: "Toy Story", categoria: "Animazione", posti: 4 }
];
console.log("L'incasso totale è stato di ", totaleIncasso(prenotazioni));

function totaleIncasso(prenotazioni) {
    let somma=0;
    for (let i=0; i<prenotazioni.length;i++) {
        somma= somma+faiBigletto(prenotazioni[i]);
    }
    return somma;
}

function faiBigletto(prenotazione) {
    if (prenotazione.eta<18 && prenotazione.categoria=="Horror") {
        console.log(`${prenotazione.utente} è troppo giovane per vedere ${prenotazione.film}`);
        return 0;
    }
    if (prenotazione.eta<=12) {
        console.log(`${prenotazione.utente} ha acquistato ${prenotazione.posti} biglietti junior per ${prenotazione.film}`);
        return prenotazione.posti*6;
    } else if (prenotazione.eta>=65) {
        console.log(`${prenotazione.utente} ha acquistato ${prenotazione.posti} biglietti senior per ${prenotazione.film}`);
        return prenotazione.posti*7;
    } else {
        console.log(`${prenotazione.utente} ha acquistato ${prenotazione.posti} biglietti standard per ${prenotazione.film}`);
        return prenotazione.posti*10;
    }
}
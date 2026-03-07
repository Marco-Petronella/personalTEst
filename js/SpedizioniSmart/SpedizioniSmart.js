/* Il Contesto
Un'azienda di e-commerce ha bisogno di un sistema per calcolare il costo finale di una spedizione. Il costo dipende dal valore del carrello, 
dalla distanza e dal tipo di cliente.

I Dati di Partenza
Crea un array di 5/8 oggetti chiamati ordini. Ogni ordine deve avere:

cliente: stringa (nome).
valoreCarrello: numero (es. 45, 120, 250).
distanzaKm: numero (distanza dal magazzino).
isPremium: booleano (true se il cliente paga un abbonamento annuale).

Le Regole del Business
Per ogni ordine, devi calcolare un costoSpedizione partendo da una base di 5€, applicando queste modifiche:

Sconto Premium: Se isPremium è true, la spedizione è sempre gratis (0€), a prescindere dal carrello o dalla distanza.
Sconto Spesa Elevata: Se il valoreCarrello è maggiore di 100€, la spedizione è gratis, a meno che la distanza non superi i 100km 
                      (in quel caso si pagano i 5€ base).
Sovrapprezzo Distanza: Se il cliente non è Premium e il carrello è sotto i 100€, 
                       ma la distanzaKm è superiore a 50km, aggiungi 3€ ai 5€ base (totale 8€).
Caso Standard: In tutti gli altri casi, si paga il fisso di 5€.

Output richiesto
Stampa in console un riepilogo per ogni ordine che dica:
"Ordine di [Nome]: Valore carrello [valore]€, Distanza [distanza]km. Costo spedizione finale: [costo]€" */

const ordini = [
  { cliente: "Marco", valoreCarrello: 120, distanzaKm: 30, isPremium: false },
  { cliente: "Anna", valoreCarrello: 45, distanzaKm: 15, isPremium: true },
  { cliente: "Giovanni", valoreCarrello: 250, distanzaKm: 120, isPremium: false },
  { cliente: "Sara", valoreCarrello: 85, distanzaKm: 60, isPremium: false },
  { cliente: "Paolo", valoreCarrello: 30, distanzaKm: 10, isPremium: false },
  { cliente: "Elena", valoreCarrello: 150, distanzaKm: 10, isPremium: true },
  { cliente: "Roberto", valoreCarrello: 95, distanzaKm: 40, isPremium: false },
  { cliente: "Marta", valoreCarrello: 110, distanzaKm: 105, isPremium: false }
];


for (let i=0; i<ordini.length; i++) {
    let prezzo=5;
    if (ordini[i].isPremium) {
        prezzo=0;
    } else if (ordini[i].valoreCarrello > 100 && ordini[i].distanzaKm<100) {
        prezzo=0;
    } else if (ordini[i].valoreCarrello > 100 && ordini[i].distanzaKm>100) {
        prezzo=5;
    } else if (ordini[i].distanzaKm>50) {
        prezzo=8;
    }
    console.log(`Ordine di ${ordini[i].cliente}: Valore carrello ${ordini[i].valoreCarrello}€, Distanza ${ordini[i].distanzaKm}Km. Costo spedizione finale: ${prezzo}€`);
}
 
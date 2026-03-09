/*
Fase 2: Gestione dell'Urgenza
Si è scoperto che l'ordine di Annamaria è urgente. Trovalo nella codaSpedizione (se presente), rimuovilo dalla sua posizione e spostalo all'inizio della coda.

Fase 3: Elaborazione Resi
Prendi i prodotti dall'array resiDaGestire uno alla volta (estraendoli dall'array) e aggiungili nuovamente all'inventario incrementando le scorte.

Resoconto Finale

Stampa l'inventario aggiornato.
Stampa la codaSpedizione finale.
Calcola il guadagno totale (solo degli ordini rimasti in coda).
*/

const inventario = {
  smartphone: 5,
  tablet: 3,
  cuffie: 10
};

const ordini = [
  { cliente: "Roberto", prodotto: "smartphone", quantità: 2, budget: 1500 },
  { cliente: "Lucia", prodotto: "tablet", quantità: 4, budget: 2000 },
  { cliente: "Valerio", prodotto: "smartphone", quantità: 1, budget: 500 },
  { cliente: "Annamaria", prodotto: "cuffie", quantità: 2, budget: 200 },
  { cliente: "Giuseppe", prodotto: "tablet", quantità: 2, budget: 1500 }
];

// Array vuoto dove sposterai gli ordini confermati
const codaSpedizione = [];

// Array di resi da processare alla fine
const resiDaGestire = ["smartphone", "tablet", "smartphone"];

// Fase 1: Evasione Ordini (Ciclo)
// Usa la logica del messaggio precedente (prezzi: 600, 400, 50). Listino Prezzi: Smartphone: 600€ Tablet: 400€ Cuffie: 50€
// Se l'ordine è valido, sottrai dall'inventario e aggiungi l'oggetto ordine (o una stringa descrittiva) alla fine dell'array codaSpedizione.

for (i=0; i<ordini.length; i++) {
    console.log(ordini[i]);
}

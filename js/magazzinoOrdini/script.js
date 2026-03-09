const inventario = {
  smartphone: 5,
  tablet: 3,
  cuffie: 10,
};
const ordini = [
  { cliente: "Roberto", prodotto: "smartphone", quantità: 2, budget: 1500 },
  { cliente: "Lucia", prodotto: "tablet", quantità: 4, budget: 2000 },
  { cliente: "Valerio", prodotto: "smartphone", quantità: 1, budget: 500 },
  { cliente: "Annamaria", prodotto: "cuffie", quantità: 2, budget: 200 },
  { cliente: "Giuseppe", prodotto: "tablet", quantità: 2, budget: 1500 },
];

// Array vuoto dove sposterai gli ordini confermati
const codaSpedizione = [];
const prezzoOrdini = [];

// Array di resi da processare alla fine
const resiDaGestire = ["smartphone", "tablet", "smartphone"];

/*Fase 1: Evasione Ordini (Ciclo)
 Usa la logica del messaggio precedente (prezzi: 600, 400, 50). Listino Prezzi: Smartphone: 600€ Tablet: 400€ Cuffie: 50€
 Se l'ordine è valido, sottrai dall'inventario e aggiungi l'oggetto ordine (o una stringa descrittiva) alla fine dell'array codaSpedizione. */

for (let i = 0; i < ordini.length; i++) {
  const ordine = evadiOrdine(ordini[i]);
  if (ordine != "KO") codaSpedizione.push(ordine);
}
console.log("ordini evasi: ");
console.log(codaSpedizione);

function evadiOrdine(ordine) {
  const costoOrdine = spesaOrdine(ordine.prodotto, ordine.quantità);
  if (costoOrdine <= ordine.budget) {
    const inventarioOK = checkInventario(ordine.prodotto, ordine.quantità, ordine.cliente);
    if (inventarioOK == "OK") {
      prezzoOrdini.push(costoOrdine);
      return (`Ordine di ${ordine.cliente} per ${ordine.quantità} ${ordine.prodotto} aggiunto`);
    } else return inventarioOK;
  } else {
    console.log(`Budget di ${ordine.cliente} insufficiente per il suo ordine`);
    return "KO";
  }
}

function spesaOrdine(prodotto, quantità) {
  if (prodotto == "smartphone") return quantità * 600;
  else if (prodotto == "tablet") return quantità * 400;
  else if (prodotto == "cuffie") return quantità * 50;
  else return 0;
}

function checkInventario(prodotto, quantità, cliente) {
  if (prodotto == "smartphone") {
    if (inventario.smartphone < quantità) {
      console.log("Smarthphone insufficienti per l'ordine di " + cliente);
      return "KO";
    } else {
      inventario.smartphone = inventario.smartphone - quantità;
    }
  } else if (prodotto == "tablet") {
    if (inventario.tablet < quantità) {
      console.log("Tablet insufficienti per l'ordine di " + cliente);
      return "KO";
    } else {
      inventario.tablet = inventario.tablet - quantità;
    }
  } else {
    if (inventario.cuffie < quantità) {
      console.log("cuffie insufficienti per l'ordine di " + cliente);
      return "KO";
    } else {
      inventario.cuffie = inventario.cuffie - quantità;
    }
  }
  return "OK";
}
/* Fase 2: Gestione dell'Urgenza
Si è scoperto che l'ordine di Annamaria è urgente. Trovalo nella codaSpedizione (se presente), 
rimuovilo dalla sua posizione e spostalo all'inizio della coda.*/

for (let i = 0; i < codaSpedizione.length; i++) {
  if (codaSpedizione[i].includes("Annamaria")) {
    const supportString = codaSpedizione[i];
    codaSpedizione.splice(i, 1);
    codaSpedizione.unshift(supportString);
  }
}

/*
Fase 3: Elaborazione Resi
Prendi i prodotti dall'array resiDaGestire uno alla volta (estraendoli dall'array) 
e aggiungili nuovamente all'inventario incrementando le scorte.
*/

while (resiDaGestire.length>0) {
  elaboraReso(resiDaGestire.shift());
}

function elaboraReso(reso) {
  if (reso == "smartphone") inventario.smartphone++;
  else if (reso == "tablet") inventario.tablet++;
  else if (reso == "cuffie") inventario.cuffie++;
  else console.log("reso non valido");
}

/*
Resoconto Finale
Stampa l'inventario aggiornato.
Stampa la codaSpedizione finale.
Calcola il guadagno totale (solo degli ordini rimasti in coda).
*/

console.log(inventario);
console.log(codaSpedizione);
let sommaOrdini = 0;
for (let i=0; i<prezzoOrdini.length; i++) {
    sommaOrdini=sommaOrdini+prezzoOrdini[i]
}
console.log("la somma di tutti gli ordini è di €" + sommaOrdini);



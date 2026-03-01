/* Il Contesto
Immagina di dover programmare il sistema di sicurezza automatizzato per l'ingresso di un castello medievale. 
Il tuo compito è scrivere un programma che analizzi una lista di persone in attesa e decida chi può entrare e chi no, 
applicando diverse regole basate sulle loro caratteristiche.

I Dati di Partenza
Supponi di avere un gruppo di 10 persone. Per ogni persona, dovrai considerare:

L'età (un numero).

Il possesso di un invito (un valore booleano: true o false).

Il nome (una stringa).

Le Regole del Castello
Il tuo script deve scorrere l'elenco delle persone e, per ognuna, stampare un messaggio in console seguendo questa logica:

Accesso VIP: Se la persona ha l'invito, entra sempre, indipendentemente dall'età. 
Messaggio: "Benvenuto/a [Nome], l'onore è nostro."

Accesso Standard: Se la persona non ha l'invito, può entrare solo se ha un'età compresa tra i 18 e i 65 anni (inclusi). 
Messaggio: "Prego [Nome], puoi passare."

Accesso Negato (Minori): Se non ha l'invito ed è sotto i 18 anni. 
Messaggio: "Spiacente [Nome], sei troppo giovane per entrare."

Accesso Negato (Anziani): Se non ha l'invito e ha più di 65 anni. 
Messaggio: "Spiacente [Nome], l'ingresso è riservato a chi ha un invito dopo una certa età."

*/

const invitati = [
  { firstName: "Elena", invito: true, age: 28 },
  { firstName: "Luca", invito: false, age: 17 },
  { firstName: "Giulia", invito: true, age: 72 },
  { firstName: "Matteo", invito: false, age: 45 },
  { firstName: "Sofia", invito: false, age: 80 },
  { firstName: "Francesco", invito: true, age: 12 },
  { firstName: "Chiara", invito: false, age: 19 },
  { firstName: "Alessandro", invito: true, age: 66 },
  { firstName: "Beatrice", invito: false, age: 5 },
  { firstName: "Davide", invito: true, age: 34 },
];

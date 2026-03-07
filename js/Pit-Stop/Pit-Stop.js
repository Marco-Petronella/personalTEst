/*Il Contesto

Sei l'ingegnere di pista di una scuderia di Formula 1. Devi analizzare i dati telemetrici di 7 piloti per decidere chi deve 
rientrare ai box per il cambio gomme basandoti sull'usura e sul tempo sul giro.

Obiettivi del Programma
Analizza ogni pilota nel ciclo e determina la strategia:

Stato Gomme: * Se usuraGomme è superiore a 80, scrivi: "[Pilota]: GOMME CRITICHE".
Se è tra 50 e 80 (inclusi), scrivi: "[Pilota]: MONITORARE USURA".
Altrimenti scrivi: "[Pilota]: GOMME OK".

Decisione Pit-Stop: * Un pilota deve fermarsi (stampa: "RIENTRARE AI BOX") se:
* L'usura è superiore a 90.
* OPPURE se l'usura è superiore a 50 E sta iniziando a piovere (pioggia è true).
In tutti gli altri casi, stampa: "CONTINUARE".

Analisi Performance Finale (Dopo il ciclo):
Calcola la media dei tempi sul giro di tutti i piloti.
Stampa il risultato finale: "Il tempo medio sul giro della gara è: [media] secondi".
*/

let totaleTempi=0;
const grigliaPartenza = [
  { pilota: "Hamilton", usuraGomme: 75, tempoGiro: 84.5, pioggia: false },
  { pilota: "Verstappen", usuraGomme: 40, tempoGiro: 82.1, pioggia: false },
  { pilota: "Leclerc", usuraGomme: 85, tempoGiro: 86.8, pioggia: true },
  { pilota: "Norris", usuraGomme: 20, tempoGiro: 83.4, pioggia: false },
  { pilota: "Sainz", usuraGomme: 92, tempoGiro: 89.2, pioggia: false },
  { pilota: "Alonso", usuraGomme: 55, tempoGiro: 85.0, pioggia: true },
  { pilota: "Russell", usuraGomme: 10, tempoGiro: 82.9, pioggia: false }
];

for (let i=0; i<grigliaPartenza.length; i++) {
   // console.log("Stampa di debug:" + grigliaPartenza[i].pilota + grigliaPartenza[i].pioggia + grigliaPartenza[i].tempoGiro + " gomme: " + grigliaPartenza[i].usuraGomme);
    if (grigliaPartenza[i].usuraGomme >80) console.log(grigliaPartenza[i].pilota + ": GOMME CRITICHE");
    else if (grigliaPartenza[i].usuraGomme >50) console.log(grigliaPartenza[i].pilota + ": MONITORARE USURA");
    else console.log(grigliaPartenza[i].pilota + ": GOMME OK");
    if (grigliaPartenza[i].usuraGomme>90 || (grigliaPartenza[i].usuraGomme>50 && grigliaPartenza[i].pioggia)) console.log("RIENTRARE AI BOX");
    else console.log("CONTINUARE");
    totaleTempi=totaleTempi+grigliaPartenza[i].tempoGiro;
}
console.log("Il tempo medio sul giro della gara è: " + (totaleTempi/grigliaPartenza.length).toFixed(2) + " secondi");

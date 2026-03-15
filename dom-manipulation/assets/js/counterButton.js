/*
Esercizio 1 — Contatore con bottoni
Crea un contatore numerico.

HTML
Devi avere:

un numero iniziale 0

un bottone +
un bottone -
un bottone Reset

Comportamento

clic su + → aumenta di 1
clic su - → diminuisce di 1
clic su Reset → torna a 0

Bonus

Se il numero è:
positivo → testo verde
negativo → testo rosso
zero → testo nero
*/

const counter = document.getElementById("counter");
const counterUp = document.getElementById("counter_up");
const counterDown = document.getElementById("counter_down");

counterUp.addEventListener('click', function() {
    counter.innerHTML = Number(counter.innerHTML) + 1;
    counterColor();
}
)
counterDown.addEventListener('click', function() {
    counter.innerHTML = Number(counter.innerHTML) - 1;
    counterColor();
}
)
function counterColor() {
    const counterNumber = Number(counter.innerHTML);
    if (counterNumber==0) counter.style.color="black";
    else if (counterNumber>0) counter.style.color="green";
    else counter.style.color="red";
}
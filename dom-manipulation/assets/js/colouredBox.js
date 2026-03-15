/*
HTML

un div
tre bottoni:
Rosso
Verde
Blu

Comportamento

Quando clicchi un bottone il colore del quadrato cambia.

Bonus
Aggiungi un bottone:

Colore casuale
che genera un colore random con JavaScript.
*/

const boxGreen = document.getElementById("box_green");
const boxRed = document.getElementById("box_red");
const boxBlue = document.getElementById("box_blue");
const boxRandom = document.getElementById("box_random");
const box=document.getElementById("box_colored")

boxGreen.addEventListener('click', function() {
    box.style.backgroundColor ='green'
} )
boxRed.addEventListener('click', function() {
    box.style.backgroundColor ='red'
} )
boxBlue.addEventListener('click', function() {
    box.style.backgroundColor ='blue'
} )
boxRandom.addEventListener('click', function() {
    const red = (Math.random()*255).toFixed();
    const blue = (Math.random()*255).toFixed();
    const green = (Math.random()*255).toFixed();
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
} )
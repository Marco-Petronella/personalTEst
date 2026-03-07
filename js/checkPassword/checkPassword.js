/*
Verificatore di Password (Manipolazione Stringhe e Cicli)
Obiettivo: Scrivere una funzione che validi se una stringa inserita dall'utente è una "Password Sicura".

Input: Una stringa (la password).

Logica:
Crea una funzione isPasswordSafe(testo).
La funzione deve restituire true solo se la stringa:
È lunga almeno 8 caratteri.
Contiene almeno un numero-
Contiene il carattere speciale !.

Output: Stampa "Password valida" o "Password troppo debole".
*/

const password = prompt("inserisci password di almeno 8 caratteri, con almeno 1 numero e con carattere speciale!");
const validPass = checkPassword(password);
if (validPass) console.log("Password valida");
else console.log("Password troppo debole");

function checkPassword(password= String(password)) {
    if (password.length<8) return false; 
    let checkNumber = false;
    let specialChar = false;
    for (let i=0; i<password.length; i++) {
        if (password.charAt(i)=="!") specialChar=true;
        if (password.charAt(i)>=0 && password.charAt(i)<=9) checkNumber=true;
    }
    if (specialChar && checkNumber) return true;
    else return false;
}


const addElementButton = document.getElementById("add-shopping-element");
const inputShopping = document.getElementById("input-shopping-list");
const shoppingList = document.getElementById("shopping-list")
console.log(addElementButton);
console.log(inputShopping);
console.log(shoppingList);

const shoppingListArray = [];

addElementButton.addEventListener('click', function() {
 const shoppingElement = inputShopping.value;
 if (shoppingElement.length > 0) {
    shoppingListArray.push(shoppingElement);
    updateShoppingList();
 }
})
function updateShoppingList() {
    let shoppingListHTML= "lista attuale: "
    for (let i=0; i<shoppingListArray.length; i++) {
        shoppingListHTML+=`<li>${shoppingListArray[i]}</li>`
    }
    shoppingList.innerHTML=shoppingListHTML;
}
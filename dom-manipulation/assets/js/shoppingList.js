const addElementButton = document.getElementById("add-shopping-element");
const inputShopping = document.getElementById("input-shopping-list");
const shoppingList = document.getElementById("shopping-list");
console.log(addElementButton);
console.log(inputShopping);
console.log(shoppingList);

const shoppingListArray = [];

addElementButton.addEventListener("click", function (e) {
  e.preventDefault(); //evita lo scroll in alto usando l'"a" come bottone
  const shoppingElement = inputShopping.value;
  if (shoppingElement.length > 0) {
    shoppingListArray.push(shoppingElement);
    updateShoppingList(shoppingElement);
  }
  inputShopping.value = ""; //svuota l'input
});
function updateShoppingList(shoppingElement) {
  let i = shoppingListArray.length;
  const li = document.createElement("li");
  li.classList.add("shopping-item");
  li.id = "shoppingListArray" + i;
  li.textContent = shoppingElement;
  shoppingList.appendChild(li);
  console.log(shoppingListArray);
  li.addEventListener('click', function () {
    // li.style.textDecoration = "line-through";
    li.classList.toggle("completed"); //mette o toglie la classe se esiste
  })
}

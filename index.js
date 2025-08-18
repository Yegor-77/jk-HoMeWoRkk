//1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}

console.log(string);

//
//

let stribnge = friends.join(",");

console.log(stribnge);

//2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

//
const cardToRemove = "Карточка-3";
const removeIndex = cards.indexOf(cardToRemove);
if (removeIndex !== -1) {
  cards.splice(removeIndex, 1);
}
console.log("Після видалення:", cards);

//
const cardToInsert = "Карточка-6";
const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);
console.log("Після додавання:", cards);

//
const cardToUpdate = "ккарточка-4";
const updateIndex = 3;
cards.splice(updateIndex, 1, cardToUpdate);
console.log("Після оновлення:", cards);

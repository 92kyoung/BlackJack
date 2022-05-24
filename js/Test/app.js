import Deck from "./deck.js";

const deck1 = new Deck();
deck1.printDeck();
deck1.shuffle();
deck1.printDeck();
console.log(deck1.deck);

const deck2 = new Deck();
deck2.printDeck();
deck2.shuffle();
deck2.printDeck();
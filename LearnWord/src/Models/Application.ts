import { Deck } from "./Deck";
export class Application {
    decks: Deck[];

    constructor(decks: Deck[]){
        this.decks = decks;
    }

    AddDeck = (deck: Deck): void => {
        if (deck.name !== '' && !this.decks.some(item => item.name == deck.name)){
            this.decks.push(deck);  
        }
        // return this;
    };

    RemoveDeck = (deck: Deck): void => {
        const deckIndex = this.decks.indexOf(deck);
        if (deckIndex !== -1){
            this.decks.splice(deckIndex, 1);
        }
        //return this;
    }

}

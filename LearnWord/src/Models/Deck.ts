import { Card } from "./Card";
import { DeckStatus } from "./DeckStatus";

 export class Deck {
    name: string;
    description: string;
    deckStatus: string = DeckStatus[2]; 
    cards: Card[];

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
        this.cards = [];
    }

    GetAllCards = (): Card[] | undefined => {
        return this.cards;
    }

    AddCard = (card: Card): this => {
        if (card.word !== '' && card.translation !== ''){
            this.cards = [ ...this.cards, card ];
        }
        return this;
    }

    DeleteCard = (card: Card): this => {
        const cardIndex = this.cards.indexOf(card);
        if (cardIndex !== -1){
            this.cards.splice(cardIndex, 1);
        }
        return this;
    }

    EditDeck = (newName: string, newDescription: string): this => {
        this.name = newName;
        this.description = newDescription;
        return this;
    }

}
import { Card } from "./Card";
import { DeckStatus } from "./DeckStatus";

 export class Deck {
    id: number;
    name: string;
    description: string;
    wordsAmount: number;
    deckStatus: string = DeckStatus[2]; 
    cards: Card[];

    constructor(id: number, name: string, description: string, cards: Card[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.wordsAmount = cards.length;
        this.cards = cards;
    }

    GetAllCards = (): Card[] | undefined => {
        return this.cards;
    }

    AddCard = (card: Card): Deck => {
        if (card.word !== '' && card.translation !== '' && !this.cards.some(item => item.id === card.id)){
            this.cards = [ ...this.cards, card ];
            this.wordsAmount++;
        }
        return this;
    }

    DeleteCard = (card: Card): Deck => {
        const cardIndex = this.cards.indexOf(card);
        if (cardIndex !== -1){
            this.cards.splice(cardIndex, 1);
            this.wordsAmount--;
        }
        return this;
    }

    EditDeck = (newName: string, newDescription: string): Deck => {
        this.name = newName;
        this.description = newDescription;
        return this;
    }

}
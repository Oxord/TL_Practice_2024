import { Application } from "./Application";
import { Card } from "./Card";

export type Deck = {
    id: number;
    name: string;
    description: string;
    wordsAmount: number;
    deckStatus: string; 
    cards: Card[];
}

const RemoveDeck = (app: Application, deck: Deck): void => {
    const deckIndex = app.decks.indexOf(deck);
    if (deckIndex !== -1){
        app.decks.splice(deckIndex, 1);
    }
}

const GetAllCards = (deck: Deck): Card[] | undefined => {
    return deck.cards;
}

const AddCard = (deck: Deck, card: Card): Deck => {
    if (card.frontSide !== '' && card.backSide !== '' && !deck.cards.some(item => item.id === card.id)){
        deck.cards = [ ...deck.cards, card ];
        deck.wordsAmount++;
    }
    return deck;
}

const DeleteCard = (deck: Deck, card: Card): Deck => {
    const cardIndex = deck.cards.indexOf(card);
    if (cardIndex !== -1){
        deck.cards.splice(cardIndex, 1);
        deck.wordsAmount--;
    }
    return deck;
}

const EditDeck = (deck: Deck, newName: string, newInfo: string): Deck => {
    deck.name = newName;
    deck.description = newInfo;
    return deck;
}

export const Deck = { RemoveDeck, GetAllCards, AddCard, DeleteCard, EditDeck };
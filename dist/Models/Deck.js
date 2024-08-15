"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const RemoveDeck = (app, deck) => {
    const deckIndex = app.decks.indexOf(deck);
    if (deckIndex !== -1) {
        app.decks.splice(deckIndex, 1);
    }
};
const GetAllCards = (deck) => {
    return deck.cards;
};
const AddCard = (deck, card) => {
    if (card.frontSide !== '' && card.backSide !== '' && !deck.cards.some(item => item.id === card.id)) {
        deck.cards = [...deck.cards, card];
        deck.wordsAmount++;
    }
    return deck;
};
const DeleteCard = (deck, card) => {
    const cardIndex = deck.cards.indexOf(card);
    if (cardIndex !== -1) {
        deck.cards.splice(cardIndex, 1);
        deck.wordsAmount--;
    }
    return deck;
};
const EditDeck = (deck, newName, newInfo) => {
    deck.name = newName;
    deck.description = newInfo;
    return deck;
};
exports.Deck = { RemoveDeck, GetAllCards, AddCard, DeleteCard, EditDeck };

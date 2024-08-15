"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = require("../Deck");
const DeckStatus_1 = require("../DeckStatus");
describe('Deck', () => {
    const oneDeck = {
        id: 1,
        name: "One Deck",
        description: "description of deck",
        wordsAmount: 0,
        deckStatus: DeckStatus_1.DeckStatus[2],
        cards: []
    };
    describe('DeleteDeck', () => {
        const app = { decks: [oneDeck] };
        it(`delete deck from Application`, () => {
            Deck_1.Deck.RemoveDeck(app, oneDeck);
            expect(app.decks).toEqual([]);
        });
    });
    describe('GetAllCards', () => {
        const cards = [{ id: 1, frontSide: "Машина", backSide: "Car" }, { id: 2, frontSide: "Педаль", backSide: "Pedal" }];
        it('get cards in deck', () => {
            oneDeck.cards = cards;
            expect(Deck_1.Deck.GetAllCards(oneDeck)).toEqual(cards);
        });
    });
    describe('AddNewCard', () => {
        const newCard = { id: 3, frontSide: "Колесо", backSide: "wheel" };
        it('add new card into deck', () => {
            oneDeck.cards = [];
            expect(Deck_1.Deck.AddCard(oneDeck, newCard).cards).toEqual([newCard]);
        });
    });
    describe('DeleteCard', () => {
        const card = { id: 3, frontSide: "Колесо", backSide: "wheel" };
        it('delete card', () => {
            expect(Deck_1.Deck.DeleteCard(oneDeck, card).cards).not.toContain(card);
        });
    });
    describe('EditDeck', () => {
        const newDeckName = 'NewName';
        const newDeckInfo = 'NewDescription';
        Deck_1.Deck.EditDeck(oneDeck, newDeckName, newDeckInfo);
        it('change deck""s name and description', () => {
            expect(oneDeck.name === newDeckName && oneDeck.description === newDeckInfo);
        });
    });
});

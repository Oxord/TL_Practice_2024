"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../Card");
const Deck_1 = require("../Deck");
describe('Deck', () => {
    const oneDeck = new Deck_1.Deck(1, "One Deck", "description of deck", []);
    describe('GetAllCards', () => {
        const cards = [
            new Card_1.Card(1, "Машина", "Car"),
            new Card_1.Card(2, "Педаль", "Pedal")
        ];
        it('get cards in deck', () => {
            oneDeck.cards = cards;
            expect(oneDeck.GetAllCards()).toEqual(cards);
        });
    });
    describe('AddNewCard', () => {
        const newCard = new Card_1.Card(3, "Колесо", "wheel");
        it('add new card into deck', () => {
            oneDeck.cards = [];
            expect(oneDeck.AddCard(newCard).cards).toEqual([newCard]);
        });
    });
    describe('DeleteCard', () => {
        const card = new Card_1.Card(3, "Колесо", "wheel");
        it('delete card', () => {
            expect(oneDeck.DeleteCard(card).cards).not.toContain(card);
        });
    });
    describe('EditDeck', () => {
        const newDeckName = 'NewName';
        const newDeckDescription = 'NewDescription';
        oneDeck.EditDeck(newDeckName, newDeckDescription);
        it('change deck""s name and description', () => {
            expect(oneDeck.name === newDeckName && oneDeck.description === newDeckDescription);
        });
    });
});

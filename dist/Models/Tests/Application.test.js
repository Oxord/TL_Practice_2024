"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../Application");
const Deck_1 = require("../Deck");
const globals_1 = require("@jest/globals");
describe('Application', () => {
    describe('AddNewDeck', () => {
        const newDeck = new Deck_1.Deck(1, "New Deck", "description of new deck", []);
        const app = new Application_1.Application([]);
        it(`adds deck to the collection and returns it`, () => {
            (0, globals_1.expect)(app.AddDeck(newDeck).decks).toEqual([newDeck]);
        });
        it(`doesn't add a deck which is already in collection`, () => {
            app.decks = [newDeck];
            (0, globals_1.expect)(app.AddDeck(Object.assign({}, newDeck)).decks).toEqual([newDeck]);
        });
        it(`doesn't add a deck with empty name`, () => {
            app.decks = [];
            (0, globals_1.expect)(app.AddDeck(Object.assign(Object.assign({}, newDeck), { name: `` })).decks).toEqual([]);
        });
    });
    describe('DeleteDeck', () => {
        const oneDeck = new Deck_1.Deck(1, "One Deck", "description of deck", []);
        const app = new Application_1.Application([oneDeck]);
        it(`delete deck from Application`, () => {
            (0, globals_1.expect)(app.RemoveDeck(oneDeck).decks).toEqual([]);
        });
    });
});

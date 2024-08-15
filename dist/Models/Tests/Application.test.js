"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../Application");
const DeckStatus_1 = require("../DeckStatus");
const globals_1 = require("@jest/globals");
describe('Application', () => {
    describe('AddNewDeck', () => {
        const newDeck = {
            id: 1,
            name: "New Deck",
            description: "description of new deck",
            wordsAmount: 0,
            deckStatus: DeckStatus_1.DeckStatus[2],
            cards: []
        };
        const app = { decks: [] };
        it(`adds deck to the collection and returns it`, () => {
            (0, globals_1.expect)(Application_1.Application.AddDeck(app, newDeck).decks).toEqual([newDeck]);
        });
        it(`returns new Application`, () => {
            const emptyApp = { decks: [] };
            (0, globals_1.expect)(Application_1.Application.AddDeck(emptyApp, newDeck).decks).not.toBe(emptyApp);
        });
        it(`doesn't add a deck which is already in collection`, () => {
            app.decks = [newDeck];
            (0, globals_1.expect)(Application_1.Application.AddDeck(app, Object.assign({}, newDeck)).decks).toEqual([newDeck]);
        });
        it(`doesn't add a car with empty name`, () => {
            app.decks = [];
            (0, globals_1.expect)(Application_1.Application.AddDeck(app, Object.assign(Object.assign({}, newDeck), { name: `` })).decks).toEqual([]);
        });
    });
});

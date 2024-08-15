import { Application } from "../Application";
import { Deck } from "../Deck";
import { DeckStatus } from "../DeckStatus";
import {expect, jest, test} from '@jest/globals';

describe('Application', () => {
    describe('AddNewDeck', () => {
        const newDeck: Deck = {        
            id: 1,
            name: "New Deck",
            description: "description of new deck",
            wordsAmount: 0,
            deckStatus: DeckStatus[2],
            cards: []
        };
        const app: Application = { decks:[] };
        it(`adds deck to the collection and returns it`, () => {
          expect(Application.AddDeck(app, newDeck).decks).toEqual([newDeck]);
        });
        it(`returns new Application`, () => {
            const emptyApp: Application = { decks: [] };
            expect(Application.AddDeck(emptyApp, newDeck).decks).not.toBe(emptyApp);
          });
        it(`doesn't add a deck which is already in collection`, () => {
          app.decks = [newDeck];
          expect(Application.AddDeck(app, { ...newDeck }).decks).toEqual([newDeck]);
        });
        it(`doesn't add a car with empty name`, () => {
          app.decks = [];
          expect(Application.AddDeck(app, { ...newDeck, name: `` }).decks).toEqual([]);
        });  
    });
});

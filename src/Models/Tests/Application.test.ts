import { Application } from "../Application";
import { Deck } from "../Deck";
import { DeckStatus } from "../DeckStatus";
import {expect, jest, test} from '@jest/globals';

describe('Application', () => {
    describe('AddNewDeck', () => {
        const newDeck = new Deck( 1, "New Deck", "description of new deck", []);
        const app = new Application([]);
        it(`adds deck to the collection and returns it`, () => {
          expect(app.AddDeck(newDeck).decks).toEqual([newDeck]);
        });
        it(`doesn't add a deck which is already in collection`, () => {
          app.decks = [newDeck];
          expect(app.AddDeck({ ...newDeck }).decks).toEqual([newDeck]);
        });
        it(`doesn't add a deck with empty name`, () => {
          app.decks = [];
          expect(app.AddDeck({ ...newDeck, name: `` }).decks).toEqual([]);
        });  
    });
    describe('DeleteDeck', () => {
      const oneDeck = new Deck(1, "One Deck", "description of deck", []);
      const app = new Application([oneDeck]);
      it(`delete deck from Application`, () => {
          expect(app.RemoveDeck(oneDeck).decks).toEqual([])
      });
  });
});

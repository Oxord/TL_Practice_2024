"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor(decks) {
        this.AddDeck = (deck) => {
            if (deck.name !== '' && !this.decks.some(item => item.name == deck.name)) {
                this.decks.push(deck);
            }
            return this;
        };
        this.RemoveDeck = (deck) => {
            const deckIndex = this.decks.indexOf(deck);
            if (deckIndex !== -1) {
                this.decks.splice(deckIndex, 1);
            }
            return this;
        };
        this.decks = decks;
    }
}
exports.Application = Application;

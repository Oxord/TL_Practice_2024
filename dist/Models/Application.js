"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const AddDeck = (app, deck) => {
    if (deck.name !== '' && !app.decks.some(item => item.name == deck.name)) {
        app.decks.push(deck);
    }
    return app;
};
exports.Application = { AddDeck };

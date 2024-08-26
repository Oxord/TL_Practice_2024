"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(id, word, translation) {
        this.EditCard = (word, translation) => {
            this.word = word;
            this.translation = translation;
            return this;
        };
        this.id = id;
        this.word = word;
        this.translation = translation;
    }
}
exports.Card = Card;

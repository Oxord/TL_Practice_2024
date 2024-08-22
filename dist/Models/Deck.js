"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const DeckStatus_1 = require("./DeckStatus");
class Deck {
    constructor(id, name, description, cards) {
        this.deckStatus = DeckStatus_1.DeckStatus[2];
        this.GetAllCards = () => {
            return this.cards;
        };
        this.AddCard = (card) => {
            if (card.word !== '' && card.translation !== '' && !this.cards.some(item => item.id === card.id)) {
                this.cards = [...this.cards, card];
                this.wordsAmount++;
            }
            return this;
        };
        this.DeleteCard = (card) => {
            const cardIndex = this.cards.indexOf(card);
            if (cardIndex !== -1) {
                this.cards.splice(cardIndex, 1);
                this.wordsAmount--;
            }
            return this;
        };
        this.EditDeck = (newName, newDescription) => {
            this.name = newName;
            this.description = newDescription;
            return this;
        };
        this.id = id;
        this.name = name;
        this.description = description;
        this.wordsAmount = cards.length;
        this.cards = cards;
    }
}
exports.Deck = Deck;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnProcess = void 0;
const DeckStatus_1 = require("./DeckStatus");
class LearnProcess {
    constructor(deck) {
        this.currentCard = null;
        this.currentStatus = DeckStatus_1.DeckStatus[2];
        this.AreCardsInDeck = () => {
            if (this.cards.length > 0) {
                return true;
            }
            return false;
        };
        this.ShuffleDeck = (cards) => {
            let deckCards = cards;
            let shuffledDeck = [];
            let i = Math.floor(Math.random() * cards.length);
            for (i; cards.length > 0; i = Math.floor(Math.random() * cards.length)) {
                shuffledDeck.push(cards[i]);
                cards.splice(i, 1);
            }
            cards = deckCards;
            return shuffledDeck;
        };
        this.GetCard = () => {
            const lastIndex = this.cards.length - 1;
            const card = this.cards[lastIndex];
            return card;
        };
        this.PutCardDown = (card) => {
            const cardIndex = this.cards.indexOf(card);
            this.cards.splice(cardIndex, 1);
            this.cards.push(card);
            return this.cards;
        };
        this.PutCardAway = (card) => {
            const cardIndex = this.cards.indexOf(card);
            this.cards.splice(cardIndex, 1);
            return this.cards;
        };
        this.ShowBackSide = (card) => {
            //предполагается, что карточка будет перевёрнута другой стороной, но суть метода в том, чтобы показать перевод слова
            console.log(card.translation);
        };
        this.IsWordLearn = () => {
            //метод, который зависит от ввода пользователя. 
            //Пользователь при проверке перевода может указать, сповпал ли его перевод, или же нет.
            return true;
        };
        this.deck = deck;
        this.cards = this.ShuffleDeck(deck.cards);
    }
}
exports.LearnProcess = LearnProcess;

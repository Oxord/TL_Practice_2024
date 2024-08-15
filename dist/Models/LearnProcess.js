"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnProcess = void 0;
const AreCardsInDeck = (deck) => {
    if (deck.length > 0) {
        return true;
    }
    return false;
};
const ShuffleDeck = (deck) => {
    const deckCards = deck.cards;
    const shuffledDeck = [];
    let i = Math.floor(Math.random() * deck.cards.length);
    for (i; deck.cards.length > 0; i = Math.floor(Math.random() * deck.cards.length)) {
        shuffledDeck.push(deck.cards[i]);
        deck.cards.splice(i, 1);
    }
    deck.cards = deckCards;
    return shuffledDeck;
};
const GetCard = (deck) => {
    const lastIndex = deck.length - 1;
    const card = deck[lastIndex];
    return card;
};
const PutCardDown = (card, deck) => {
    const cardIndex = deck.indexOf(card);
    deck.splice(cardIndex, 1);
    deck.push(card);
    return deck;
};
const PutCardAway = (card, deck) => {
    const cardIndex = deck.indexOf(card);
    deck.splice(cardIndex, 1);
    return deck;
};
const ShowBackSide = (card) => {
    //предполагается, что карточка будет перевёрнута другой стороной, но суть метода в том, чтобы показать перевод слова
    console.log(card.backSide);
};
const IsWordLearn = () => {
    //метод, который зависит от ввода пользователя. Пользователь при проверке перевода может указать, сповпал ли его перевод, или же нет.
    return true;
};
exports.LearnProcess = { ShuffleDeck, AreCardsInDeck, GetCard, PutCardDown, PutCardAway, ShowBackSide, IsWordLearn };

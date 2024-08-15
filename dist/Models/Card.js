"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const EditCard = (card, frontWord, backWord) => {
    card.frontSide = frontWord;
    card.backSide = backWord;
    return card;
};
exports.Card = { EditCard };

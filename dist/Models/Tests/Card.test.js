"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../Card");
describe('Card', () => {
    describe('EditCard', () => {
        let card = { id: 1, frontSide: "мяч", backSide: "ball" };
        const newFrontWord = "кошка";
        const newBackWord = "cat";
        it(`edit card and commite changes`, () => {
            card = Card_1.Card.EditCard(card, newFrontWord, newBackWord);
            expect(card.frontSide === newFrontWord && card.backSide === newBackWord);
        });
    });
});

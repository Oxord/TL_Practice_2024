"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../Card");
describe('Card', () => {
    describe('EditCard', () => {
        let card = new Card_1.Card(1, "мяч", "ball");
        const newWord = "кошка";
        const newTranslation = "cat";
        it(`edit card and commite changes`, () => {
            card = card.EditCard(newWord, newTranslation);
            expect(card.word === newWord && card.translation === newTranslation);
        });
    });
});

import { Application } from "../Application";
import { Card } from "../Card";

describe('Card', () => {
    describe('EditCard', () => {
        let card: Card = { id: 1, frontSide: "мяч", backSide: "ball" }
        const newFrontWord = "кошка";
        const newBackWord = "cat";
        it(`edit card and commite changes`, () => {
            card = Card.EditCard(card, newFrontWord, newBackWord);
            expect(card.frontSide === newFrontWord && card.backSide === newBackWord)
        });
    });
});

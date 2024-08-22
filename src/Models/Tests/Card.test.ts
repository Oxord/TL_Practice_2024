import { Application } from "../Application";
import { Card } from "../Card";

describe('Card', () => {
    describe('EditCard', () => {
        let card = new Card(1, "мяч", "ball");
        const newWord = "кошка";
        const newTranslation = "cat";
        it(`edit card and commite changes`, () => {
            card = card.EditCard(newWord, newTranslation);
            expect(card.word === newWord && card.translation === newTranslation)
        });
    });
});

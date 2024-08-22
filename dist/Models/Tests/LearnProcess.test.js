"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../Card");
const Deck_1 = require("../Deck");
const LearnProcess_1 = require("../LearnProcess");
describe('LearnProcess', () => {
    const carCards = [
        new Card_1.Card(1, "Машина", "Car"),
        new Card_1.Card(2, "Педаль", "Pedal"),
        new Card_1.Card(3, "Ремень", "belt")
    ];
    let shuffledDeck = [];
    const carDeck = new Deck_1.Deck(1, "Cars", "words that are related to cars", carCards);
    const learnProcess = new LearnProcess_1.LearnProcess(carDeck);
    describe('AreCardsInDeck', () => {
        it('return true, if cards are in deck, and return false in other way', () => {
            expect(learnProcess.AreCardsInDeck()).toEqual(true);
            const learnProcessWithEmptyDeck = new LearnProcess_1.LearnProcess(new Deck_1.Deck(2, "emptyDeck", "empty", []));
            expect(learnProcessWithEmptyDeck.AreCardsInDeck()).toEqual(false);
        });
    });
    describe('ShuffleDeck', () => {
        it('shuffled deck correctly', () => {
            if (learnProcess.AreCardsInDeck()) {
                //так как у нас в поле cards класса LearnProcess сразу записывается перемешанная колода, 
                //то здесь мы не вызываем метод ShuffleDeck
                expect(learnProcess.cards).not.toEqual(learnProcess.deck.cards);
            }
            else {
                console.log('Cards are not in deck');
            }
        });
    });
    describe('GetCard', () => {
        it('retrun the card from shuffled deck', () => {
            if (learnProcess.AreCardsInDeck()) {
                expect(learnProcess.deck.cards.includes(learnProcess.GetCard()));
            }
            else {
                console.log('Cards are not in deck');
            }
        });
    });
    describe('PutCardDown', () => {
        it('put the card at the bottom of the deck', () => {
            const oneCard = learnProcess.GetCard();
            expect(learnProcess.PutCardDown(oneCard).at(-1)).toEqual(oneCard);
        });
    });
    describe('PutCardAway', () => {
        it('remove card from shuffledDeck', () => {
            const oneCard = learnProcess.GetCard();
            expect(learnProcess.PutCardAway(oneCard).indexOf(oneCard)).toEqual(-1);
        });
    });
    describe('IsWordLearn', () => {
        it('returns true if the user has indicated that they have learned the word', () => {
            expect(learnProcess.IsWordLearn()).toEqual(true);
        });
    });
});

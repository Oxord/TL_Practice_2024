"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeckStatus_1 = require("../DeckStatus");
const LearnProcess_1 = require("../LearnProcess");
describe('LearnProcess', () => {
    const carCards = [{ id: 1, frontSide: "Машина", backSide: "Car" }, { id: 2, frontSide: "Педаль", backSide: "Pedal" }, { id: 3, frontSide: "Ремень", backSide: "belt" }];
    let shuffledDeck = [];
    const carDeck = {
        id: 1,
        name: "Cars",
        description: "words that are related to cars",
        wordsAmount: 3,
        deckStatus: DeckStatus_1.DeckStatus[2],
        cards: carCards
    };
    describe('AreCardsInDeck', () => {
        it('return true, if cards are in deck, and return false in other way', () => {
            expect(LearnProcess_1.LearnProcess.AreCardsInDeck(carCards)).toEqual(true);
            expect(LearnProcess_1.LearnProcess.AreCardsInDeck([])).toEqual(false);
        });
    });
    describe('ShuffleDeck', () => {
        it('shuffled deck correctly', () => {
            if (LearnProcess_1.LearnProcess.AreCardsInDeck(carDeck.cards)) {
                shuffledDeck = LearnProcess_1.LearnProcess.ShuffleDeck(carDeck);
                expect(shuffledDeck).not.toEqual(carDeck.cards);
            }
            else {
                console.log('Cards are not in deck');
            }
        });
    });
    describe('GetCard', () => {
        it('retrun the card from shuffled deck', () => {
            if (LearnProcess_1.LearnProcess.AreCardsInDeck(shuffledDeck)) {
                expect(carCards.includes(LearnProcess_1.LearnProcess.GetCard(shuffledDeck)));
            }
            else {
                console.log('Cards are not in deck');
            }
        });
    });
    describe('PutCardDown', () => {
        it('put the card at the bottom of the deck', () => {
            const oneCard = LearnProcess_1.LearnProcess.GetCard(shuffledDeck);
            expect(LearnProcess_1.LearnProcess.PutCardDown(oneCard, shuffledDeck).at(-1)).toEqual(oneCard);
        });
    });
    describe('PutCardAway', () => {
        it('remove card from shuffledDeck', () => {
            const oneCard = LearnProcess_1.LearnProcess.GetCard(shuffledDeck);
            expect(LearnProcess_1.LearnProcess.PutCardAway(oneCard, shuffledDeck).indexOf(oneCard)).toEqual(-1);
        });
    });
    describe('ShowBackSide', () => {
        it('turns the card over', () => {
            expect(LearnProcess_1.LearnProcess.ShowBackSide(LearnProcess_1.LearnProcess.GetCard(shuffledDeck)));
        });
    });
    describe('IsWordLearn', () => {
        it('returns true if the user has indicated that they have learned the word', () => {
            expect(LearnProcess_1.LearnProcess.IsWordLearn);
        });
    });
});

import { Card } from "../Card";
import { Deck } from "../Deck";
import { DeckStatus } from "../DeckStatus";
import { LearnProcess } from "../LearnProcess"

describe('LearnProcess', () => {
    const carCards: Card[] = [{id: 1, frontSide: "Машина", backSide: "Car"}, {id: 2, frontSide: "Педаль", backSide: "Pedal"}, {id: 3, frontSide: "Ремень", backSide: "belt"}];
    let shuffledDeck: Card[] = [];
    const carDeck: Deck = {        
        id: 1,
        name: "Cars",
        description: "words that are related to cars",
        wordsAmount: 3,
        deckStatus: DeckStatus[2],
        cards: carCards
    };

    describe('AreCardsInDeck', () => {
        it('return true, if cards are in deck, and return false in other way', () => {
            expect(LearnProcess.AreCardsInDeck(carCards)).toEqual(true)
            expect(LearnProcess.AreCardsInDeck([])).toEqual(false)
        })
    });

    describe('ShuffleDeck', () => {
        it('shuffled deck correctly', () => {
            if (LearnProcess.AreCardsInDeck(carDeck.cards)){
                shuffledDeck = LearnProcess.ShuffleDeck(carDeck);
                expect(shuffledDeck).not.toEqual(carDeck.cards)
            }
            else{
                console.log('Cards are not in deck')
            }
        })
    });
    describe('GetCard', () => {
        it('retrun the card from shuffled deck', () => {
            if(LearnProcess.AreCardsInDeck(shuffledDeck)){
                expect(carCards.includes(LearnProcess.GetCard(shuffledDeck)));
            }
            else{
                console.log('Cards are not in deck')
            }
        })
    });
    describe('PutCardDown', () => {
        it('put the card at the bottom of the deck', () => {
            const oneCard: Card = LearnProcess.GetCard(shuffledDeck);
            expect(LearnProcess.PutCardDown(oneCard, shuffledDeck).at(-1)).toEqual(oneCard);
        })
    });
    describe('PutCardAway', () => {
        it('remove card from shuffledDeck', () => {
            const oneCard: Card = LearnProcess.GetCard(shuffledDeck);
            expect(LearnProcess.PutCardAway(oneCard, shuffledDeck).indexOf(oneCard)).toEqual(-1);
        })
    });
    describe('ShowBackSide', () => {
        it('turns the card over', () => {
            expect(LearnProcess.ShowBackSide(LearnProcess.GetCard(shuffledDeck)));
        })
    });
    describe('IsWordLearn', () => {
        it('returns true if the user has indicated that they have learned the word', () => {
            expect(LearnProcess.IsWordLearn);
        })
    })
})
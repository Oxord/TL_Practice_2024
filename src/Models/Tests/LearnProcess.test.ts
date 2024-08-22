import { Card } from "../Card";
import { Deck } from "../Deck";
import { DeckStatus } from "../DeckStatus";
import { LearnProcess } from "../LearnProcess"

describe('LearnProcess', () => {
    const carCards: Card[] = [
        new Card(1, "Машина", "Car"), 
        new Card(2, "Педаль", "Pedal"), 
        new Card(3, "Ремень", "belt")];

    let shuffledDeck: Card[] = [];

    const carDeck = new Deck(1, "Cars", "words that are related to cars", carCards);

    const learnProcess = new LearnProcess(carDeck); 

    describe('AreCardsInDeck', () => {
        it('return true, if cards are in deck, and return false in other way', () => {
            expect(learnProcess.AreCardsInDeck()).toEqual(true);
            const learnProcessWithEmptyDeck = new LearnProcess(new Deck(2, "emptyDeck", "empty", []));
            expect(learnProcessWithEmptyDeck.AreCardsInDeck()).toEqual(false)
        })
    });

    describe('ShuffleDeck', () => {
        it('shuffled deck correctly', () => {
            if (learnProcess.AreCardsInDeck()){
                //так как у нас в поле cards класса LearnProcess сразу записывается перемешанная колода, 
                //то здесь мы не вызываем метод ShuffleDeck
                expect(learnProcess.cards).not.toEqual(learnProcess.deck.cards)
            }
            else{
                console.log('Cards are not in deck')
            }
        })
    });
    describe('GetCard', () => {
        it('retrun the card from shuffled deck', () => {
            if(learnProcess.AreCardsInDeck()){
                expect(learnProcess.deck.cards.includes(learnProcess.GetCard()));
            }
            else{
                console.log('Cards are not in deck')
            }
        })
    });
    describe('PutCardDown', () => {
        it('put the card at the bottom of the deck', () => {
            const oneCard: Card = learnProcess.GetCard();
            expect(learnProcess.PutCardDown(oneCard).at(-1)).toEqual(oneCard);
        })
    });
    describe('PutCardAway', () => {
        it('remove card from shuffledDeck', () => {
            const oneCard: Card = learnProcess.GetCard();
            expect(learnProcess.PutCardAway(oneCard).indexOf(oneCard)).toEqual(-1);
        })
    });
    describe('IsWordLearn', () => {
        it('returns true if the user has indicated that they have learned the word', () => {
            expect(learnProcess.IsWordLearn()).toEqual(true);
        })
    })
})
import { Application } from "../Application";
import { Card } from "../Card";
import { Deck } from "../Deck";
import { DeckStatus } from "../DeckStatus";

describe('Deck', () => {
    const oneDeck: Deck = {        
        id: 1,
        name: "One Deck",
        description: "description of deck",
        wordsAmount: 0,
        deckStatus: DeckStatus[2],
        cards: []};
    describe('DeleteDeck', () => {
        const app: Application = { decks:[oneDeck]}
        it(`delete deck from Application`, () => {
            Deck.RemoveDeck(app, oneDeck);
            expect(app.decks).toEqual([])
        });
    });
    describe('GetAllCards', () => {
        const cards: Card[] = [{id: 1, frontSide: "Машина", backSide: "Car"}, {id: 2, frontSide: "Педаль", backSide: "Pedal"}];
        it('get cards in deck', () => {
            oneDeck.cards = cards;
            expect(Deck.GetAllCards(oneDeck)).toEqual(cards);
        })
    });
    describe('AddNewCard', () => {
        const newCard: Card = { id: 3, frontSide: "Колесо", backSide: "wheel"};
        it('add new card into deck', () => {
            oneDeck.cards = [];
            expect(Deck.AddCard(oneDeck, newCard).cards).toEqual([newCard]);
        })
    });
    describe('DeleteCard', () => {
        const card: Card = { id: 3, frontSide: "Колесо", backSide: "wheel"};
        it('delete card', () => {
            expect(Deck.DeleteCard(oneDeck, card).cards).not.toContain(card);
        })
    });
    describe('EditDeck', () => {
        const newDeckName = 'NewName';
        const newDeckInfo = 'NewDescription';
        Deck.EditDeck(oneDeck, newDeckName, newDeckInfo)
        it('change deck""s name and description', () => {
            expect(oneDeck.name === newDeckName && oneDeck.description === newDeckInfo)
        })
    });
});
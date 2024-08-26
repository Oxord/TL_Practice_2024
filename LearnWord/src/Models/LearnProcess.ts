import { Card } from "./Card";
import { Deck } from "./Deck";
import { DeckStatus } from "./DeckStatus";

export class LearnProcess {
    deck: Deck;
    cards: Card[];
    learnedCards: Card[];
    currentCard?: Card;
    currentStatus: string = DeckStatus[2];

    constructor(deck: Deck, cards: Card[]){
        this.deck = deck;
        this.cards = cards
        this.learnedCards = [];
        this.currentCard = this.GetCard();
    }

    AreCardsInDeck = (): boolean => {
        if(this.cards.length > 0){
            return true
        }
        return false;
    };

    ShuffleDeck = (cards: Card[]): Card[] => {
       const deckCards: Card[] = cards;
       const shuffledDeck: Card[] = [];
       let i: number = Math.floor(Math.random() * cards.length);
       for( i; cards.length > 0; i = Math.floor(Math.random() * cards.length)){
           shuffledDeck.push(cards[i]);
           cards.splice(i, 1);
       }
       cards = deckCards;
       return shuffledDeck;
   }
   
   
    GetCard = (): Card => {
        return this.cards[0];
   }
   
    PutCardDown = (card: Card): Card[] => {
       const cardIndex = this.cards.indexOf(card);
       this.cards.splice(cardIndex, 1);
       this.cards = [...this.cards, card]
       return this.cards;
   }
   
    PutCardAway = (card: Card): Card[] => {
       this.learnedCards = [...this.learnedCards, card]; 
       const cardIndex = this.cards.indexOf(card);
       this.cards.splice(cardIndex, 1);
       return this.cards;
   }

}


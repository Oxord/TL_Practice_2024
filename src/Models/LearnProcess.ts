import { Card } from "./Card";
import { Deck } from "./Deck"
import { DeckStatus } from "./DeckStatus";

export class LearnProcess {
    deck: Deck;
    cards: Card[];
    currentCard: Card | null = null;
    currentStatus: string = DeckStatus[2];

    constructor(deck: Deck){
        this.deck = deck;
        this.cards = this.ShuffleDeck(deck.cards);
    }

    AreCardsInDeck = (): boolean => {
        if(this.cards.length > 0){
            return true
        }
        return false;
    };

    ShuffleDeck = (cards: Card[]): Card[] => {
       let deckCards: Card[] = cards;
       let shuffledDeck: Card[] = [];
       let i: number = Math.floor(Math.random() * cards.length);
       for( i; cards.length > 0; i = Math.floor(Math.random() * cards.length)){
           shuffledDeck.push(cards[i]);
           cards.splice(i, 1);
       }
       cards = deckCards;
       return shuffledDeck;
   }
   
   
    GetCard = (): Card => {
        const lastIndex = this.cards.length - 1;
        const card: Card = this.cards[lastIndex]; 
       return card;
   }
   
    PutCardDown = (card: Card): Card[] => {
       const cardIndex = this.cards.indexOf(card);
       this.cards.splice(cardIndex, 1);
       this.cards.push(card);
       return this.cards;
   }
   
    PutCardAway = (card: Card): Card[] => {
       const cardIndex = this.cards.indexOf(card);
       this.cards.splice(cardIndex, 1);
       return this.cards;
   }
   
    ShowBackSide = (card: Card): void => {
       //предполагается, что карточка будет перевёрнута другой стороной, но суть метода в том, чтобы показать перевод слова
       console.log(card.translation);
   } 
   
    IsWordLearn = (): boolean => {
       //метод, который зависит от ввода пользователя. 
       //Пользователь при проверке перевода может указать, сповпал ли его перевод, или же нет.
       return true;
   }

}


import { Card } from "./Card";
import { Deck } from "./Deck"
import { DeckStatus } from "./DeckStatus";

export type LearnProcess = {
    deck: Deck;
    currentCard: Card;
    currentStatus: DeckStatus;
}

const AreCardsInDeck = (deck: Card[]): boolean => {
    if(deck.length > 0){
        return true
    }
    return false;
}

const ShuffleDeck = (deck: Deck): Card[] => {
    const deckCards: Card[] = deck.cards;
    const shuffledDeck: Card[] = [];
    let i: number = Math.floor(Math.random() * deck.cards.length);
    for( i; deck.cards.length > 0; i = Math.floor(Math.random() * deck.cards.length)){
        shuffledDeck.push(deck.cards[i]);
        deck.cards.splice(i, 1);
    }
    deck.cards = deckCards;
    return shuffledDeck;
}


const GetCard = (deck: Card[]): Card => {
    const lastIndex = deck.length - 1;
    const card: Card = deck[lastIndex]; 
    return card;
}

const PutCardDown = (card: Card, deck: Card[]): Card[] => {
    const cardIndex = deck.indexOf(card);
    deck.splice(cardIndex, 1);
    deck.push(card);
    return deck;
}

const PutCardAway = (card: Card, deck: Card[]): Card[] => {
    const cardIndex = deck.indexOf(card);
    deck.splice(cardIndex, 1);
    return deck;
}

const ShowBackSide = (card: Card): void => {
    //предполагается, что карточка будет перевёрнута другой стороной, но суть метода в том, чтобы показать перевод слова
    console.log(card.backSide);
} 

const IsWordLearn = (): boolean => {
    //метод, который зависит от ввода пользователя. Пользователь при проверке перевода может указать, сповпал ли его перевод, или же нет.
    return true;
}

export const LearnProcess = {ShuffleDeck, AreCardsInDeck, GetCard, PutCardDown, PutCardAway, ShowBackSide, IsWordLearn}
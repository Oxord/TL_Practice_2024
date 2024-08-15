export type Card = {
    id: number;
    frontSide: string;
    backSide: string;
}

const EditCard = (card: Card, frontWord: string, backWord: string): Card => {
    card.frontSide = frontWord;
    card.backSide = backWord;
    return card;
}

export const Card = { EditCard };
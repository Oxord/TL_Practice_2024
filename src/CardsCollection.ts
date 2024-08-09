import { Card } from "./Card";
import { CardsCollectionStatus } from "./CardsCollectionStatus";
export type cardsCollection = {
    id: number;
    name: string;
    wordsAmount: number;
    collectionStatus: CardsCollectionStatus;
    cards?: Card[];
}
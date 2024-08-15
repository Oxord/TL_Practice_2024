import { Deck } from "./Deck";
export type Application ={
    decks: Deck[];
}

const AddDeck = (app: Application, deck: Deck): Application => {
    if (deck.name !== '' && !app.decks.some(item => item.name == deck.name)){
        app.decks.push(deck);  
    }
    return app;
};

export const Application = { AddDeck };
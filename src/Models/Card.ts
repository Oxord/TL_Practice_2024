export class Card {
    id: number;
    word: string;
    translation: string;

    constructor(id: number, word: string, translation: string){
        this.id = id;
        this.word = word;
        this.translation = translation;
    }

    EditCard = (word: string, translation: string): Card => {
        this.word = word;
        this.translation = translation;
        return this;
    }

}
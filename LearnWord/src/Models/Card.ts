export class Card {
    word: string;
    translation: string;

    constructor(word: string, translation: string){
        this.word = word;
        this.translation = translation;
    }

    EditCard = (word: string, translation: string): this => {
        this.word = word;
        this.translation = translation;
        return this;
    }

}
import { useForm } from "../hooks/useForm";
import { usePopup } from "../hooks/usePopup";
import { Card } from "../Models/Card";
import { Deck } from "../Models/Deck";
import { AddButton } from "./AddButton";
import { Form } from "./Form";
import icon from "./images/bin-icon.png";
import { InputForm } from "./InputForm";
import { OneDeckView } from "./OneDeckView";
import { Popup } from "./Popup";
import { PopupCover } from "./PopupCover";
import { useState } from "react";
import { StartLearningButtonPreview } from "./StartLearningButtonPreview";
import { LearnProcess } from "../Models/LearnProcess";
import { CardInDeckPreview } from "./CardInDeckPreview";

const learnProc = new LearnProcess(new Deck("", ""), [  ]);
learnProc.cards.splice(learnProc.cards.indexOf(new Card("", ""), 1));

type DeckPreviewProps = {
  deck: Deck;
  deleteDeck: () => void;
  deckNumber: number;
};


export const DeckPreview = ({ deck, deleteDeck, deckNumber }: DeckPreviewProps) => {
  
  const [cards, setCards] = useState(deck.cards);


  const { name, description } = deck;

  learnProc.deck = deck;
  learnProc.cards = deck.cards;

  const { visible, changeVisible } = usePopup();
  const { visible: visiblePreview, changeVisible: changeVisiblePreview } = usePopup();

  const { formValues, onFormValueChange } = useForm();

  const submitForm = () => {
    deck.AddCard(new Card(formValues.name, formValues.description));
      setCards(deck.cards);
  };

  const removeCard = (card: Card): void => {
    deck.DeleteCard(card);
    setCards(cards.splice(1, cards.indexOf(card)));
  };

  return (
    <div className="element-preview">
      <div className="element-preview__element-number">{deckNumber}</div>
      <span className="element-preview__element-name" onClick={changeVisiblePreview}>
        {name}
      </span>
      <div className="element-preview__element-remove element-remove" onClick={deleteDeck}>
        <img className="element-remove__icon" src={icon} alt="bin icon" />
      </div>

      <PopupCover isVisible={visiblePreview}></PopupCover>
      <OneDeckView isVisible={visiblePreview} onClose={changeVisiblePreview}>
        <h1>Deck information</h1>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <h2>Cards</h2>
        {deck.cards.length &&
          deck.cards.map((card, index) => (
            <CardInDeckPreview
              key={index}
              card={card}
              deleteCard={() => {
                removeCard(card);
              }}
              cardNumber={deck.cards.indexOf(card) + 1}
            />
          ))}
        <AddButton buttonLabel="Add card" onClick={changeVisible} />
        <StartLearningButtonPreview learnProc={learnProc} deck={deck}></StartLearningButtonPreview>
        <PopupCover isVisible={visible}></PopupCover>
        <Popup isVisible={visible} onClose={changeVisible} onAccept={submitForm}>
          <Form>
            <h1>Create card</h1>
            <InputForm label="Word" value={formValues.name} onChange={onFormValueChange("name")} />
            <InputForm label="Translate" value={formValues.description} onChange={onFormValueChange("description")} />
          </Form>
        </Popup>
      </OneDeckView>
    </div>
  );
};

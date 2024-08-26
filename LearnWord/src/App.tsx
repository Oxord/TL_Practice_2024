import { Application } from "./Models/Application";
import { DeckPreview } from "./Components/DeckPreview";
import { Deck } from "./Models/Deck";
import { useForm } from "./hooks/useForm";
import { EmptyPage } from "./Components/EmptyPage";
import { Popup } from "./Components/Popup";
import { InputForm } from "./Components/InputForm";
import { Form } from "./Components/Form";
import { ReactNode, useState } from "react";
import { usePopup } from "./hooks/usePopup";
import { PopupCover } from "./Components/PopupCover";
import { AddButton } from "./Components/AddButton";

const initApp = new Application([new Deck("New Deck", "New Description"), new Deck("Second Deck", "desct")]);
type DecksProps = {
  app: Application;
};


const Decks = ({ app }: DecksProps): JSX.Element => {
  const [decks, setDecks] = useState(initApp.decks);
  const removeDeck = (deck: Deck): void => {
    initApp.RemoveDeck(deck);
    setDecks(decks.splice(1, decks.indexOf(deck)));
  };

  return (
    <div className="decks">
      <div className="decks-label">Your decks</div>
      {app.decks.length &&
        app.decks.map((deck, index) => (
          <DeckPreview
            key={index}
            deck={deck}
            deckNumber={index+1}
            deleteDeck={() => {
              initApp.RemoveDeck(deck);
              removeDeck(deck);
            }}
          />
        ))}
    </div>
  );
};

type AddDeckProps = {
  children: ReactNode;
};

const AddDeck = ({ children }: AddDeckProps): JSX.Element => <div className="add-deck">{children}</div>;

export const App = () => {
  const { visible, changeVisible } = usePopup();
  const { formValues, onFormValueChange } = useForm();

  const submitForm = () => {
    initApp.AddDeck(new Deck(formValues.name, formValues.description));
  };

  return (
    <EmptyPage>
      <PopupCover isVisible={visible}></PopupCover>
      <Decks app={initApp} />

      <AddDeck>
        <AddButton buttonLabel="New deck" onClick={changeVisible}/>
      </AddDeck>
      <Popup isVisible={visible} onClose={changeVisible} onAccept={submitForm}>
        <Form>
          <h1>Create deck</h1>
          <InputForm label="Name" value={formValues.name} onChange={onFormValueChange("name")} />
          <InputForm label="Description" value={formValues.description} onChange={onFormValueChange("description")} />
        </Form>
      </Popup>
    </EmptyPage>
  );
};

import { useState } from "react";
import { LearnProcess } from "../Models/LearnProcess";
import { CardLearnPreview } from "./CardLearnPreview";
import { EmptyPage } from "./EmptyPage";
import { LearnProcessPopup } from "./LearnProcessPopup";
import { PopupCover } from "./PopupCover";
import { DeckStatus } from "../Models/DeckStatus";
import { Deck } from "../Models/Deck";
import { Card } from "../Models/Card";


type LearnProcessProps = {
  learnProcess: LearnProcess;
  visible: boolean;
  onChangeVisible: () => void;
  deck: Deck;
  card: Card;
  setCard: () => void;//React.Dispatch<React.SetStateAction<Card>>;
};

export const LearnProcessView = ({ learnProcess, visible, onChangeVisible, deck, card, setCard }: LearnProcessProps) => {

  const [allCards, setAllCards] = useState(learnProcess.cards);
  const AddCardToAllCards = (card: Card) => {
    setAllCards([...allCards, card]);
    console.log("in All Cards now are: ", allCards);
  };

  console.log('cardin LearnProcessView', card)

  const replaceCard = () => {
    setCard();
  };

  const [isWordDisplay, setIsWordSideDisplay] = useState(true);

  const changeCardSide = () => {
    if(isWordDisplay){
      setIsWordSideDisplay(false)
    }
    else{
      setIsWordSideDisplay(true);
    }
  }

  const turnOverCard = () => {
    changeCardSide();
  };

  const cardLearned = () => {
    AddCardToAllCards(card);
    learnProcess.PutCardAway(card);
    learnProcess.currentStatus = DeckStatus[1];
    if (learnProcess.cards.length > 0) {
      turnOverCard();
      replaceCard();
    } else {
      onChangeVisible();
      alert("Карты кончились. Вы успешно выучили слова из этой колоды!");
      deck.cards = learnProcess.learnedCards;
      learnProcess.cards = learnProcess.learnedCards;
      learnProcess.learnedCards = [];
      setAllCards([]);
    }
  };

  const cardUnlearned = () => {
    turnOverCard();
    replaceCard();
    learnProcess.currentStatus = DeckStatus[2];
    learnProcess.PutCardDown(card);
  };

  const onCloseLearn = () => {
    onChangeVisible();
  };

  return (
    <EmptyPage>
      <PopupCover isVisible={visible}></PopupCover>
      <LearnProcessPopup
        isVisible={visible}
        onClose={onCloseLearn}
        onFlip={turnOverCard}
        onLearned={cardLearned}
        onUnlearned={cardUnlearned}
      >
        <CardLearnPreview  isWord={isWordDisplay} card={card}></CardLearnPreview>
      </LearnProcessPopup>
    </EmptyPage>
  );
};

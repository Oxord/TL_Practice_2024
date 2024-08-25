import { useState } from "react";
import { LearnProcess } from "../Models/LearnProcess";
import { CardLearnPreview } from "./CardLearnPreview";
import { EmptyPage } from "./EmptyPage";
import { LearnProcessPopup } from "./LearnProcessPopup";
import { PopupCover } from "./PopupCover";
import { DeckStatus } from "../Models/DeckStatus";
import { Deck } from "../Models/Deck";


type LearnProcessProps = {
  learnProcess: LearnProcess;
  visible: boolean;
  onChangeVisible: () => void;
  deck: Deck;
};

export const LearnProcessView = ({ learnProcess, visible, onChangeVisible, deck }: LearnProcessProps) => {
    // const [allCards, setAllCards] = useState(deck.cards);
    // console.log(allCards);

    // const deleteCard = (card: Card) => {
    //   const index = allCards.indexOf(card);
    //   setAllCards(allCards.splice(index, 1));
    // }

    const [currCard, setCard] = useState(learnProcess.currentCard);
    const replaceCard = () => {
      setCard(learnProcess.GetCard());
    }

    const [currCardSide, setCardSide] = useState(currCard.word);
    const turnOverCard = () => {
      if (currCardSide === currCard.word){
        setCardSide(currCard.translation)
      }
      else{
        setCardSide(currCard.word)
      }
    }

    const cardLearned = () => {
      learnProcess.PutCardAway(currCard);
      learnProcess.currentStatus = DeckStatus[1];
      if(learnProcess.cards.length > 0){
        // deleteCard(currCard);
        replaceCard();
        setCardSide(currCard.word);
      }
      else{
        onChangeVisible();
        alert("Карты кончились. Статус вашей колоды: ");
        alert(learnProcess.currentStatus);
        deck.cards = learnProcess.learnedCards;
        learnProcess.cards = learnProcess.learnedCards;
        learnProcess.learnedCards = [];
        learnProcess.currentCard = learnProcess.GetCard();
      }
    }

    const cardUnlearned = () => {
      replaceCard();
      setCardSide(currCard.word);
      learnProcess.currentStatus = DeckStatus[2];
      learnProcess.PutCardDown(currCard);
    }

  return (
    <EmptyPage>
      <PopupCover isVisible={visible}></PopupCover>
      <LearnProcessPopup
        isVisible={visible}
        onClose={onChangeVisible}
        onFlip={turnOverCard}
        onLearned={cardLearned}
        onUnlearned={cardUnlearned}
        >
        <CardLearnPreview cardSide={currCardSide}></CardLearnPreview>
      </LearnProcessPopup>
    </EmptyPage>
  );
};
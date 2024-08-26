import { useCallback, useState } from "react";
import { usePopup } from "../hooks/usePopup";
import { Deck } from "../Models/Deck";
import { LearnProcess } from "../Models/LearnProcess";
import { LearnProcessView } from "./LearnProcessView";
import { StartLearningButton } from "./StartLearningButton";

type StartLearningButtonPreviewProps = {
  learnProc: LearnProcess;
  deck: Deck;
};

export const StartLearningButtonPreview = ({ learnProc, deck }: StartLearningButtonPreviewProps) => {

  const { visible, changeVisible } = usePopup();
  const [card, setCard] = useState(learnProc.currentCard);

  const InitCurrCard = useCallback(() => {
    console.log('card before change', learnProc.GetCard());
    setCard(learnProc.GetCard());
  }, []);

  console.log("card in learn process", card);

  return (
    <div>
      <StartLearningButton
        buttonLabel="Start learning"
        onClick={() => {
          if (learnProc.cards.length !== 0) {
            changeVisible();
            InitCurrCard();

            console.log(card);
          } else {
            alert("You can not do it! Your deck does not contain cards.");
          }
        }}
      ></StartLearningButton>
      <LearnProcessView
        learnProcess={learnProc}
        visible={visible}
        onChangeVisible={changeVisible}
        deck={deck}
        card={card}
        setCard={InitCurrCard}
      ></LearnProcessView>
    </div>
  );
};

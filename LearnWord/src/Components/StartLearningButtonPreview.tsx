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
  return (
    <div>
      <StartLearningButton
        buttonLabel="Start learning"
        onClick={() => {
          if (learnProc.cards.length !== 0) {
            changeVisible();
            learnProc.currentCard = learnProc.GetCard();
          } else {
            alert("You can not do it! Your deck does not contain cards.");
          }
        }}
      ></StartLearningButton>
      <LearnProcessView learnProcess={learnProc} visible={visible} onChangeVisible={changeVisible} deck={deck}></LearnProcessView>
    </div>
  );
};


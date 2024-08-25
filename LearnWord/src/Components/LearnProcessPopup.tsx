import { ReactNode } from "react";
import { LearnProcessButton } from "./LearnProcessButton";
import { usePopup } from "../hooks/usePopup";
import { AcceptedButton } from "./AcceptedButton";

type LearnProcessPopupProps = {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onFlip: () => void;
  onLearned: () => void;
  onUnlearned: () => void;
};

export const LearnProcessPopup = ({ children, isVisible, onClose, onFlip, onLearned, onUnlearned }: LearnProcessPopupProps) => {

  const {visible, changeVisible}= usePopup();
  let classPopupModificator = "popup popup_hidden popup_learn-process";
  if (isVisible) {
    classPopupModificator = "popup popup_visible popup_learn-process";
  } else {
    classPopupModificator = "popup popup_hidden popup_learn-process";
  }
  return (
      <div className={classPopupModificator}>
        <div className="popup__form form">{children}</div>
        <div className="popup__popup-buttons popup-buttons">
          <LearnProcessButton buttonLabel="Close" onClick={onClose}></LearnProcessButton>
          <LearnProcessButton buttonLabel="ShowBackSide" onClick={ () => {onFlip(); changeVisible()}}></LearnProcessButton>
          <AcceptedButton isVisible={visible} onClick={() => {onLearned(); changeVisible()}} label="Learned"/>
          <AcceptedButton isVisible={visible} onClick={() => {onUnlearned(); changeVisible()}} label="Unlearned"/>
        </div>
      </div>
  );
};
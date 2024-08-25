import { ReactNode, useEffect } from "react";

type OneDeckViewProps = {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
};

export const OneDeckView = ({ children, isVisible, onClose }: OneDeckViewProps) => {
  useEffect(() => {
    return () => {
      console.log('unmount piopup');
    }
  }, []) 


  let classPopupModificator = "popup popup_hidden";
  if (isVisible) {
    classPopupModificator = "popup popup_visible";
  } else {
    classPopupModificator = "popup popup_hidden";
  }
  return (
      <div className={classPopupModificator}>
        <div className="popup__one-deck one-deck">{children}</div>
          <div className="popup__popup-buttons popup-buttons">
          <button className="popup-buttons__button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
  );
};
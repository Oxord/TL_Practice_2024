import { ReactNode } from "react";

type PopupProps = {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onAccept: () => void;
};

export const Popup = ({ children, isVisible, onClose, onAccept }: PopupProps) => {
  let classPopupModificator = "popup popup_hidden";
  if (isVisible) {
    classPopupModificator = "popup popup_visible";
  } else {
    classPopupModificator = "popup popup_hidden";
  }
  return (
      <div className={classPopupModificator}>
        <div className="popup__form form">{children}</div>
        <div className="popup__popup-buttons popup-buttons">
          <button className="popup-buttons__button" onClick={onClose}>
            Close
          </button>
          <button
            className="popup-buttons__button"
            onClick={() => {
              onAccept();
              onClose();
            }}
          >
            Create
          </button>
        </div>
      </div>
  );
};

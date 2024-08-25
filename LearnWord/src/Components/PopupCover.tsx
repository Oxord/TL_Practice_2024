type PopupCoverProps = {
  isVisible: boolean;
};

export const PopupCover = ({ isVisible }: PopupCoverProps) => {
  let classCoverModificator = "cover__popup cover__popup_hidden";
  if (isVisible) {
    classCoverModificator = "cover__popup cover__popup_visible";
  } else {
    classCoverModificator = "cover__popup cover__popup_hidden";
  }
  return (
    <div className={classCoverModificator}></div>
  );
};

import { Card } from "../Models/Card";

type CardLearnPreviewProps = {
  isWord: boolean;
  card: Card;
};

export const CardLearnPreview = ({ isWord, card }: CardLearnPreviewProps) => {
  if (isWord) {
    return (
      <div className="learn-card-preview__card-preview  card-preview">
        <div className="element-preview__element-name">{card?.word}</div>
      </div>
    );
  } else {
    return (
      <div className="learn-card-preview__card-preview  card-preview">
        <div className="element-preview__element-name">{card?.translation}</div>
      </div>
    );
  }
};

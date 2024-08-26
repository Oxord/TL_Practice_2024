import { Card } from "../Models/Card";
import icon from "./images/bin-icon.png"

type CardInDeckPreviewProps = {
  cardNumber: number;
  card: Card;
  deleteCard: () => void;
};

export const CardInDeckPreview = ({ card, deleteCard, cardNumber }: CardInDeckPreviewProps) => (
  <div className="element-preview">
    <span className="element-preview__element-number">{cardNumber}</span>
    <span className="element-preview__element-name">{card.word} - {card.translation}</span>
    <div className="element-preview__element-remove element-remove" onClick={deleteCard}>
        <img className="element-remove__icon" src={icon} alt="bin icon" />
    </div>
  </div>
);
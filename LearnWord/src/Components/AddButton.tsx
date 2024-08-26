type AddButtonProps = {
  buttonLabel: string;
  onClick: () => void;
};

export const AddButton = ({ buttonLabel, onClick }: AddButtonProps) => (
  <button className="add-deck__add-button" onClick={onClick}>
    {buttonLabel}
  </button>
);

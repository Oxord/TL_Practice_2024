type StartLearningButtonProps = {
    buttonLabel: string;
    onClick: () => void;
  };
  
  export const StartLearningButton = ({ buttonLabel, onClick }: StartLearningButtonProps) => (
    <button className="start-learning-button" onClick={onClick}>
      {buttonLabel}
    </button>
  );
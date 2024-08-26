type LearnProcessButtonProps = {
    buttonLabel: string;
    onClick: () => void;
}

export const LearnProcessButton = ({buttonLabel, onClick}: LearnProcessButtonProps) => {
    return(
        <button className="popup-buttons__button" onClick={onClick}>{buttonLabel}</button>
    )
}
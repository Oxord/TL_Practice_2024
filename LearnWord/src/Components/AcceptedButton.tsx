
type AcceptedButtonProps = {
    isVisible: boolean;
    label: string;
    onClick: () => void;
}

export const AcceptedButton = ({ isVisible, label, onClick}: AcceptedButtonProps) => {
    let classAcceptedButtonModificator = "popup-buttons__button accepted-button_hidden";
    if (isVisible) {
        classAcceptedButtonModificator = "popup-buttons__button accepted-button_visible";
    } else {
        classAcceptedButtonModificator = "popup-buttons__button accepted-button_hidden";
    }
    return(
        <button className={classAcceptedButtonModificator} onClick={onClick}>{label}</button>
    )
}
import { usePopup } from "../hooks/usePopup";;
import { OneDeckView } from "./OneDeckView";
import { PopupCover } from "./PopupCover";

type NoticeProps = {
    noticeLabel: string;
}

export const Notice = ({noticeLabel}: NoticeProps) => {
    const { visible, changeVisible } = usePopup();
    changeVisible();
    console.log(visible)
    return(
    <div>
        <PopupCover isVisible={true}></PopupCover>
        <OneDeckView isVisible={visible} onClose={changeVisible}>
            <span>
                {noticeLabel}
            </span>
        </OneDeckView>
    </div>
)};
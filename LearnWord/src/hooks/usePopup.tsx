import { useState } from "react";

export const usePopup = () => {
  const [visible, setVisible] = useState(false);
  function changeVisible() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }
  return {
    visible, changeVisible
  };
};

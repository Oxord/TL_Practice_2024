import { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
};

export const Form = ({ children }: FormProps) => {

  return (
    <form className="popup__form form">
      {children}
    </form>
  );
};

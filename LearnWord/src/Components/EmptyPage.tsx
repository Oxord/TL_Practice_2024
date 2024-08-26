import { ReactNode } from "react"

type EmptyPageProps = {
    children: ReactNode;
};

export const EmptyPage = ({children}: EmptyPageProps) => <div>{children}</div>
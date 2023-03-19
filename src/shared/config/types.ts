import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

// _app page layout
export type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};


// button props
export type ButtonProps = {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    //
    loading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: string;
    targetBlank?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    icon ?: string;
}


// chat bar types
export interface ChatBarProps {
    handleSubmit : any
    setInputData : any
    inputData : any
}


// converstion type
export interface ConversationProps { 
    sender ?: string
    response : any
    handleButtonSubmit ?: any
}
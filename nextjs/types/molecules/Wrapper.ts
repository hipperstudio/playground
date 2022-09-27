import { ReactElement } from "react";

export type WrapperProps = {
    type?: string;
    variant?: string;
    children?: ReactElement | ReactElement[];
}
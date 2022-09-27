import { ReactElement } from "react";

export type ContainerProps = {
    type?: string;
    variant?: string;
    children?: ReactElement | ReactElement[];
}
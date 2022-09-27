import { ReactElement } from "react";

export type SectionProps = {
    type?: string;
    variant?: string;
    children?: ReactElement | ReactElement[];
}
import { useEffect, useState } from "react";
import { ButtonProps } from "types/atoms/Button";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
    type = "anchor",
    variant = "primary",
    content = "This is a sample button text"
}) => {
    const [currentType, setCurrentType] = useState(type);
    const [currentVariant, setCurrentVariant] = useState(variant);

    useEffect(() => {
        setCurrentType(type);
        setCurrentVariant(variant);
    }, [type, variant]);

    return (
        (currentType === "anchor") && <a className={styles[currentVariant]}>{content}</a> ||
        (currentType === "submit") && <button type="submit" className={styles[currentVariant]}>{content}</button> ||
        (currentType === "button") && <button className={styles[currentVariant]}>{content}</button>
    );
}

export default Button;
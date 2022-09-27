import { useEffect, useState } from "react";
import { ContainerProps } from "types/atoms/Container";
import styles from "./Container.module.scss";

const Container: React.FC<ContainerProps> = ({
    type = "div",
    variant = "flex",
    children
}) => {
    const [currentType, setCurrentType] = useState(type);
    const [currentVariant, setCurrentVariant] = useState(variant);

    useEffect(() => {
        setCurrentType(type);
        setCurrentVariant(variant);
    }, [type, variant]);

    return (
        (currentType === "div") && <div className={styles[currentVariant]}>{children}</div> ||
        (currentType === "span") && <span className={styles[currentVariant]}>{children}</span>
    );
}

export default Container;
import { useEffect, useState } from "react";
import { SectionProps } from "@/types/organisms/Section";
import styles from "./Section.module.scss";

const Section: React.FC<SectionProps> = ({
    type = "section",
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
        (currentType === "section") && <section className={styles[currentVariant]}>{children}</section> ||
        (currentType === "main") && <main className={styles[currentVariant]}>{children}</main> ||
        (currentType === "aside") && <aside className={styles[currentVariant]}>{children}</aside> ||
        (currentType === "article") && <article className={styles[currentVariant]}>{children}</article>
    );
}

export default Section;
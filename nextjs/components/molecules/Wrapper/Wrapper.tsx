import { useEffect, useState } from "react";
import { WrapperProps } from "@/types/molecules/Wrapper";
import styles from "./Wrapper.module.scss";

const Wrapper: React.FC<WrapperProps> = ({
    type = "wrapper",
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
        (currentType === "wrapper") && <div className={styles[currentVariant]}>{children}</div>
    );
}

export default Wrapper;
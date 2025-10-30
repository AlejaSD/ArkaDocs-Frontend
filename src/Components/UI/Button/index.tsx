import styles from "./Button.module.css"

interface Props {
    label?: string;
    width?: number;
}

export const ButtonComponent = ({ label, width }: Props) => {
    return (
        <button className={styles.button} style={{ width }}>
            {label}
        </button>
    );
};

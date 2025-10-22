import styles from "./Button.module.css"

interface Props {
    label?: string;
}

export const ButtonComponent = ({ label }: Props) => {
    return (
        <button className={styles.button}>
            {label}
        </button>
    );
};

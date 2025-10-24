import styles from "./Input.module.css";

import eyeOff from "../../../Assets/eye-off.svg";
import eyeIcon from "../../../Assets/eye.svg";
import { useState } from "react";

interface Props {
  label?: string;
  type?: string;
  img?: string;
  message?: string;
}

export const InputComponent = ({
  label,
  type = "text",
  img,
  message,
}: Props) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className={styles.dates}>
      <p>{label}</p>
      <div className={styles.inputContainer}>
        {isPassword && (
          <button
            onClick={() => setShow((s) => !s)}
            type="button"
            className={styles.eyeButton}
            aria-label={show ? "NonePassword" : "Password"}
          >
            <img src={show ? eyeOff : eyeIcon} alt={show ? "eye-off" : "eye"} />
          </button>
        )}
        {img && <img src={img} alt="icon" />}
        <input type={inputType} placeholder={message} />
      </div>
    </div>
  );
};

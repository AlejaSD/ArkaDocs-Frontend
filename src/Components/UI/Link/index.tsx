import { Link, useNavigate } from "react-router-dom";
import styles from "./Link.module.css"

interface Props {
    label?: string;
    linkText?: string;
    message?: string;
  direction?: "left" | "right"; // opcional, para forzar dirección
}

export const LinkComponent = ({ linkText = "/", message, label, direction }: Props) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    // decidir dirección: si no viene por prop, inferir por destino
    const dir = direction ?? (linkText === "/login" ? "right" : "left");
    const cls = dir === "left" ? "slide-left" : "slide-right";
    const container = document.getElementById("auth-container");
    if (container) {
      container.classList.add(cls);
    }
    window.setTimeout(() => {
      navigate(linkText);
    }, 550);
  };

  return (
    <div className={styles.section_1}>
      <p>
        {message} <Link to={linkText} onClick={handleClick} className={styles.link}>{label}</Link>
      </p>
      </div>
  );
};
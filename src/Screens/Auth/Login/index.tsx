import styles from "./Login.module.css";
import { InputComponent } from "../../../Components/UI/Input/index";
import atSign from "../../../Assets/at-sign.svg";
import { ButtonComponent } from "../../../Components/UI/Button";
import icon from "../../../Assets/icon.svg";

const Login = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.section_1}></div>
        <div className={styles.section_2}>
          <div className={styles.form}>
            <div className={styles.logo}>
              <img src={icon} alt="" />
            </div>
            <h1>ARKADOCS</h1>
            <h2>Accede a tu cuenta</h2>
            <InputComponent
              label="Correo electrónico"
              type="email"
              img={atSign}
              message="Por favor ingresa tu correo electrónico"
            />
            <InputComponent
              label="Contraseña"
              type="password"
              message="Por favor ingresa tu Contraseña"
            />
            <ButtonComponent label="Iniciar Sesion" />
          </div>
          <div className={styles.section_3}>
            <p>
              ¿No tienes una cuenta? <a href="#">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

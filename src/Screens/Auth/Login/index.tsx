import styles from "./Login.module.css";
import { InputComponent } from "../../../Components/UI/Input/index";
import { ButtonComponent } from "../../../Components/UI/Button";
import { LinkComponent } from "../../../Components/UI/Link";
import icon from "../../../Assets/icon.svg";
import atSign from "../../../Assets/at-sign.svg";


const Login = () => {
  return (
    <>
      <div className={styles.background} />
  <div className={styles.container} id="auth-container">
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
          <LinkComponent linkText="/signup" message="¿Ya tienes cuenta?" label="Registrate" />
        </div>
        <div className={styles.section_1}></div>
      </div>
    </>
  );
};

export default Login;

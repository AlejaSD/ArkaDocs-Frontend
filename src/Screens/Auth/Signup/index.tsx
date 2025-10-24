import styles from "./Signup.module.css";
import { InputComponent } from "../../../Components/UI/Input/index";
import atSign from "../../../Assets/at-sign.svg";
import { ButtonComponent } from "../../../Components/UI/Button";
import icon from "../../../Assets/icon.svg";
import user from "../../../Assets/user.svg"
import { LinkComponent } from "../../../Components/UI/Link";

const Signup = () => {
  return (
    <>
      <div className={styles.background} />
  <div className={styles.container} id="auth-container">
        <div className={styles.section_1}></div>
        <div className={styles.section_2}>
          <div className={styles.form}>
            <div className={styles.logo}>
              <img src={icon} alt="" />
            </div>
            <h1>ARKADOCS</h1>
            <h2>Crea Tu Cuenta</h2>
            <InputComponent
              label="Nombre Completo"
              type="text"
              message="Por favor ingresa tu nombre"
              img={user}
            />
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
          <LinkComponent linkText="/login" message="¿No tienes una cuenta?" label="Inicia Sesion"/>
        </div>
      </div>
    </>
  );
};

export default Signup;

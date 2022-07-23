import styles from "./Login.module.css";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="text"
          className={classNames(styles.input, styles.username)}
        />
        <input
          type="password"
          className={classNames(styles.input, styles.password)}
        />
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(login());
            navigate("/graphs", { replace: true });
          }}
        >
          Login
        </button>
      </div>
      <div className={styles.footer}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/bravo.svg`}
          alt="logo"
          height="30"
        />
      </div>
    </div>
  );
};

export default Login;

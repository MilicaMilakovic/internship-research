import styles from "./Login.module.css";
import { useAppDispatch } from '../store/hooks';
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <button onClick={() => {dispatch(login())}}>Login</button>
    </div>
  );
};

export default Login;

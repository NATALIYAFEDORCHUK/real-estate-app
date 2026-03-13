import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Auth.module.css";

import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../store/authSlice";
import type { AppDispatch, RootState } from "../../store/store";

interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const fieldId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [isRegister, setIsRegister] = useState(false);

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (
    values: LoginValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const action = isRegister
      ? await dispatch(register(values))
      : await dispatch(login(values));
    if (login.fulfilled.match(action) || register.fulfilled.match(action)) {
      resetForm();
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authSection}>
        <div className={styles.authImg}>
          <img src="/city-auth.png" alt="city" className={styles.image} />
        </div>
        <div className={styles.authForm}>
          <h1 className={styles.title}>{isRegister ? "Register" : "Login"}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.form}>
              <label htmlFor={`${fieldId}-email`} className={styles.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                placeholder="Email"
                className={styles.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
              <label htmlFor={`${fieldId}-password`} className={styles.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id={`${fieldId}-password`}
                placeholder="Password"
                className={styles.field}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
              {!isRegister && (
                <button type="button" className={styles.forgotPassword}>
                  Forgot password?
                </button>
              )}
              {error && <div className={styles.error}>{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className={styles.signAuthBtn}
              >
                {loading ? "Processing..." : isRegister ? "Sign Up" : "Sign In"}
              </button>

              <p className={styles.signAuthText}>
                Don't have an account?
                <span
                  onClick={() => setIsRegister(!isRegister)}
                  className={styles.signAuthLink}
                >
                  Sign Up
                </span>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

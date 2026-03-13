import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import type { RootState, AppDispatch } from "../../store/store";

import { useNavigate, useLocation, Link } from "react-router-dom";

const Header: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const isOpenDealsPage = location.pathname === "/properties";

const handleLogout = () => {
  dispatch(logout());
  navigate("/");
}
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>My Logo</h1>
        </Link>
        <nav className={styles.nav}>
          {token ? (
            isOpenDealsPage ? (
              <button
                className={styles.button}
                onClick={handleLogout}
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  className={styles.button}
                  onClick={() => navigate("/properties")}
                >
                  Open Deals
                </button>
                <button
                  className={styles.button}
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </>
            )
          ) : (
            <>
              <button
                className={styles.button}
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button
                className={styles.button}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

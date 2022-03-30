import React, { useState } from "react";
import RootLayout from "../../Layouts/RootLayout";
import { useNavigate } from "react-router-dom";
import { users } from "./Users";
import "./styles.scss";

const Auth = () => {
  const [formValues, setFormValues] = useState({
    email: "guest@gmail.com",
    password: "123456",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserExist = users.some(
      (user) =>
        user.email === formValues.email && user.password === formValues.password
    );

    if (!isUserExist) return;
    navigate("headset-form");
  };

  return (
    <RootLayout>
      <div className="login-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Login</label>
            <input
              type="email"
              required
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </div>
          <div className="form-input">
            <label>Password</label>

            <input
              type="password"
              required
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>

          <div className="button-wrapper">
            <button type="submit" className="login-btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default Auth;

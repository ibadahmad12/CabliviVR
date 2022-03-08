import React, { useState } from "react";
import List from "../HeadSetList/index";
import "./styles.scss";

export default function Auth() {
  const [showLogin, isShowLogin] = useState(true);
  const [navigateToList, isNavigateToList] = useState(false);

  if (navigateToList) return <List />;
  else if (showLogin) return <LoginForm isShowLogin={isShowLogin} />;
  else return <HeadsetForm isNavigateToList={isNavigateToList} />;
}

// SHOW LOGIN FORM
function LoginForm({ isShowLogin }) {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    isShowLogin(false);
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
  );
}

// SHOW HEADSET FORM
function HeadsetForm({ isNavigateToList }) {
  const [headsetNo, setHeadsetNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(headsetNo);
    isNavigateToList(true);
  };

  return (
    <div className="headset-form-wrapper">
      <h4>Enter Headset Number</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={headsetNo}
          onChange={(e) => setHeadsetNo(e.target.value)}
        />
        <div className="button-wrapper">
          <button type="submit" className="headset-search-btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

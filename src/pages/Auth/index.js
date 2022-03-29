import React, { useState, useContext } from "react";
import RootLayout from "../../Layouts/RootLayout";
import List from "../../Components/HeadSetList/index";
import { users } from "./Users";
import { HeadsetContext } from "../../Context/RootContext";
import "./styles.scss";

const Auth = () => {
  const [showLogin, isShowLogin] = useState(true);
  const [navigateToList, isNavigateToList] = useState(false);
  const { currentHeadSet } = useContext(HeadsetContext);
  const [headsetsId, setHeadsetId] = useState(0);

  console.log(currentHeadSet);

  if (navigateToList || currentHeadSet?.last_six_serial_no)
    return (
      <RootLayout>
        <List id={headsetsId || currentHeadSet?.last_six_serial_no} />
      </RootLayout>
    );
  else if (showLogin)
    return (
      <RootLayout>
        <LoginForm isShowLogin={isShowLogin} />
      </RootLayout>
    );
  else
    return (
      <RootLayout>
        <HeadsetForm
          isNavigateToList={isNavigateToList}
          setHeadsetId={setHeadsetId}
        />
      </RootLayout>
    );
};

export default Auth;

// SHOW LOGIN FORM
const LoginForm = ({ isShowLogin }) => {
  const [formValues, setFormValues] = useState({
    email: "guest@gmail.com",
    password: "123456",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserExist = users.some(
      (user) =>
        user.email === formValues.email && user.password === formValues.password
    );

    if (!isUserExist) return;

    isShowLogin(false);
  };

  return (
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
  );
};

// SHOW HEADSET FORM
const HeadsetForm = ({ isNavigateToList, setHeadsetId }) => {
  const [headsetNo, setHeadsetNo] = useState("");

  const handleSubmit = (e) => {
    setHeadsetId(headsetNo);
    isNavigateToList(true);
  };

  return (
    <div className="headset-form-wrapper">
      <h4>Enter Headset Number</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Sticker Number"
          type="text"
          required
          value={headsetNo}
          pattern="[A-Za-z0-9]{6}"
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
};

import React, { useState } from "react";
import RootLayout from "../../Layouts/RootLayout";
import List from "../../Components/HeadSetList/index";
import axios from "axios";
import { users } from "./Users";
import "./styles.scss";

const Auth = () => {
  const [showLogin, isShowLogin] = useState(true);
  const [navigateToList, isNavigateToList] = useState(false);
  const [headsetsData, setHeadsetData] = useState([]);

  if (navigateToList)
    return (
      <RootLayout>
        <List headsetsData={headsetsData} />
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
          setHeadsetData={setHeadsetData}
        />
      </RootLayout>
    );
};

export default Auth;

// SHOW LOGIN FORM
const LoginForm = ({ isShowLogin }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
};

// SHOW HEADSET FORM
const HeadsetForm = ({ isNavigateToList, setHeadsetData }) => {
  const [headsetNo, setHeadsetNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/users/getHeadsets/${headsetNo}`);
    setHeadsetData(data);
    isNavigateToList(true);
  };

  return (
    <div className="headset-form-wrapper">
      <h4>Enter Headset Number</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="6 Hexa Decimal Characters"
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

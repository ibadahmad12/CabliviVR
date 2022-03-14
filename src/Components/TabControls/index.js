import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeadsetContext } from "../../Context/RootContext";
import { buttons } from "./Buttons";
import "./styles.scss";

let activeButtonId = 0;

const Tab = () => {
  const navigate = useNavigate();
  const contextData = useContext(HeadsetContext);

  const getDate = () => {
    let date = new Date(parseInt(contextData.currentHeadSet?.date) * 1000);
    return (
      date.getDate() + "/" + date.getMonth() + 1 + "/" + date?.getFullYear()
    );
  };

  const getTime = () => {
    let date = new Date(parseInt(contextData.currentHeadSet?.date) * 1000);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  };

  const switchTabs = (event, index) => {
    activeButtonId = parseInt(index);
    navigate(event);
  };

  return (
    <div className="tab-container">
      <div className="user-info">
        <h6>
          Session : {getDate()} at {getTime()}
        </h6>
        <div className="headset-info">
          <h5>{contextData?.currentHeadSet?.device_serial_no.slice(-4)}</h5>
          <p>Headset Number</p>
        </div>
      </div>
      <div className="tab-buttons-container">
        {buttons.map(({ text, event }, index) => (
          <button
            className={`${activeButtonId === index && "active"}`}
            onClick={() => switchTabs(event, index)}
            key={index}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;

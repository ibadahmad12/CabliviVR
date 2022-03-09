import React from "react";
import { useNavigate } from "react-router-dom";
import { buttons } from "./Buttons";
import "./styles.scss";

let activeButtonId = 0;

const Tab = () => {
  const navigate = useNavigate();

  const switchTabs = (event, index) => {
    activeButtonId = parseInt(index);
    navigate(event);
  };

  return (
    <div className="tab-container">
      <div className="user-info">
        <h6>Session : 4/12/2022 at 14:32</h6>
        <div className="headset-info">
          <h5>4332</h5>
          <p>Headset Number</p>
        </div>
      </div>
      <div className="tab-buttons-container">
        {buttons.map(({ text, event }, index) => {
          return (
            <button
              className={`${activeButtonId === index && "active"}`}
              onClick={() => switchTabs(event, index)}
              key={index}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;

import React, { useContext, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { HeadsetContext } from "../../Context/RootContext";
import { buttons } from "./Buttons";
import "./styles.scss";
import { convertDateToUCT } from "../../_helpers";

let activeButtonId = 0;

const Tab = () => {
  const navigate = useNavigate();
  const contextData = useContext(HeadsetContext);

  const getTime = useMemo(() => {
    let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date));
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, [contextData]);

  const getDate = useMemo(() => {
    let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date));
    return (
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getFullYear()
    );
  }, [contextData]);

  const switchTabs = (event, index) => {
    activeButtonId = index;
    navigate(event);
  };

  return (
    <div className="tab-container">
      <div className="user-info">
        <div>
          <>
            <button onClick={() => navigate("/")}>Headset List</button>
            <button
              onClick={() =>
                navigate("/", {
                  state: {
                    headsetForm: true,
                  },
                })
              }
            >
              New Entry
            </button>
          </>
          <h6>
            Session : {getDate} at {getTime} (CDT)
          </h6>
        </div>
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

import React, { useContext } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const Treatment = () => {
  const { currentHeadSet } = useContext(HeadsetContext);

  return (
    <RootLayout>
      <TabLayout>
        <div className="treatment-wrapper">
          <h2>What do you do?</h2>

          <div className="header-wrapper">
            <h6>&nbsp;Wait&nbsp;</h6>
            <h5>&nbsp;Start treatment for aTTP immediately with :&nbsp;</h5>
          </div>

          <div className="treatment-card-container">
            <div
              className={`treatment-card ${
                currentHeadSet?.wait_for_ADAMTS13_Results && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.wait_for_ADAMTS13_Results &&
                    "active-heading"
                  }`}
                >
                  Wait for ADAMTS13 <br /> test results
                </h4>
              </div>
            </div>
            <div
              className={`treatment-card ${
                currentHeadSet?.plasma_exchnage && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.plasma_exchnage && "active-heading"
                  }`}
                >
                  Plasma Exchange
                </h4>
              </div>
            </div>
            <div
              className={`treatment-card ${
                currentHeadSet?.plasma_exchnage_therapi && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.plasma_exchnage_therapi && "active-heading"
                  }`}
                >
                  Plasma exchange <br />+ <br /> immunosuppressive therapy
                </h4>
              </div>
            </div>
            <div
              className={`treatment-card ${
                currentHeadSet?.plasma_exchnage_therapi_cabilivi && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.plasma_exchnage_therapi_cabilivi &&
                    "active-heading"
                  }`}
                >
                  Cablivi <br /> + <br />
                  plasma exchange <br />+<br /> immunosuppressive therapy
                </h4>
              </div>
            </div>
          </div>
        </div>
      </TabLayout>
    </RootLayout>
  );
};

export default Treatment;

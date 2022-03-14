import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const Treatment = () => {
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
            <div className="treatment-card">
              <div className="content-wrapper">
                <h4>
                  Wait fot ADAMTS13 <br /> test results
                </h4>
              </div>
            </div>
            <div className="treatment-card ">
              <div className="content-wrapper">
                <h4>Plasma Exchange</h4>
              </div>
            </div>
            <div className="treatment-card ">
              <div className="content-wrapper">
                <h4>
                  Plasma exchange <br />+ <br /> immunosuppressive therapy
                </h4>
              </div>
            </div>
            <div className="treatment-card active">
              <div className="content-wrapper">
                <h4 className="active-heading">
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

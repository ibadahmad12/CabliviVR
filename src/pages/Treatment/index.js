import React from "react";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

export default function Treatment() {
  return (
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
              <h4>Wait fot ADAMST test results</h4>
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
                Plasma exchange <br />+ <br /> immunosuppersive therapy{" "}
              </h4>
            </div>
          </div>
          <div className="treatment-card active">
            <div className="content-wrapper">
              <h4>
                Cablivi <br /> + <br />
                plasma exchange <br />+<br /> immunosupporsive therapy
              </h4>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

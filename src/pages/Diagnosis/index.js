import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const Diagnosis = () => {
  return (
    <RootLayout>
      <TabLayout>
        <div className="diagnosis-wrapper">
          <h2>Choose a diagnosis NOW</h2>

          <div className="diagnosis-card-container">
            <div className="diagnosis-card">
              <div className="content-wrapper">
                <h1>ITP</h1>
                <h4>
                  Immune <br />
                  Thrombocytopenia
                </h4>
              </div>
            </div>
            <div className="diagnosis-card active">
              <div className="content-wrapper">
                <h1 className="active-heading">aTTP/iTTP</h1>
                <h4 className="active-heading">
                  Acquired/Immune-mediated Thrombotic Thrombocytopenic Purpura{" "}
                </h4>
              </div>
            </div>
            <div className="diagnosis-card active">
              <div className="content-wrapper">
                <h1 className="active-heading">aHUS</h1>
                <h4 className="active-heading">
                  Atypical Hemolytic <br /> Uremic Syndrome
                </h4>
              </div>
            </div>
          </div>
        </div>
      </TabLayout>
    </RootLayout>
  );
};

export default Diagnosis;

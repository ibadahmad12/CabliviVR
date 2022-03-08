import React from "react";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

export default function Diagnosis() {
  return (
    <TabLayout>
      <div className="diagnosis-wrapper">
        <h2>Choose a diagnosis NOW</h2>

        <div className="diagnosis-card-container">
          <div className="diagnosis-card">
            <div className="content-wrapper">
              <h1>ITP</h1>
              <h4>Immune Thronebycitopenia</h4>
            </div>
          </div>
          <div className="diagnosis-card active">
            <div className="content-wrapper">
              <h1>aTTP/iTTP</h1>
              <h4>Acquired immune/mediated thornbatic Activity and Antibody</h4>
            </div>
          </div>
          <div className="diagnosis-card active">
            <div className="content-wrapper">
              <h1>aHUS</h1>
              <h4>Atypical Hermolytic Uremic Direct Antigobulin</h4>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

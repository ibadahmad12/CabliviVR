import React from "react";
import "./styles.scss";

export default function ClinicalReport() {
  return (
    <div className="clinical-report-wrapper">
      <div>
        <h6>Clinical Laboratary Report </h6>
        <img src={"/reportLogo.png"} alt="logo" />
      </div>

      <div className="clinic-info">
        <div>
          <p>Patient Name</p>
          <p>Sex</p>
          <p>Age</p>
          <p>Ordering Physician</p>
        </div>

        <div>
          <p className="user-data">Jones, Gabrielle</p>
          <p className="user-data">Female</p>
          <p className="user-data">34</p>
          <p className="user-data">Miller 36563267</p>
        </div>
      </div>
    </div>
  );
}

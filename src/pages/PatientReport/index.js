import React, { useContext } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import ClinicalReport from "../../Components/ClinicalReport";
import ReportData from "../../Components/ReportData";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const PatientReport = () => {
  const contextData = useContext(HeadsetContext);

  return (
    <RootLayout>
      <TabLayout>
        <div className="table-wrapper">
          <ClinicalReport currentHeadSet={""} />
          <ReportData currentHeadSet={""} />
          <DoctorsNotes />
          <p className="pres-footer">
            Hypothetical patient clinical laboratory report
          </p>
        </div>
      </TabLayout>
    </RootLayout>
  );
};

const DoctorsNotes = () => {
  return (
    <div className="notes-container">
      <h4>NOTES</h4>
      <p>Not taking any meds</p>
      <p>No history of transplant, illness, cancer, hypertension, </p>
      <p>
        No family history of serious illness; diabetes in uncle;
        <br /> grandfather died of heart attack
      </p>
    </div>
  );
};

export default PatientReport;

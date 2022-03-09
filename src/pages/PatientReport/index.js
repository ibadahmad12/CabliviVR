import React from "react";
import ClinicalReport from "../../Components/ClinicalReport";
import ReportData from "../../Components/ReportData";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const PatientReport = () => {
  return (
    <RootLayout>
      <TabLayout>
        <div className="table-wrapper">
          <ClinicalReport />
          <ReportData />
        </div>
      </TabLayout>
    </RootLayout>
  );
};

export default PatientReport;

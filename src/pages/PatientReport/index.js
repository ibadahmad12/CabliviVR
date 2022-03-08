import React from "react";
import ClinicalReport from "../../Components/ClinicalReport";
import ReportData from "../../Components/ReportData";
import TabLayout from "../../Layouts/TabLayout";

export default function PatientReport() {
  return (
    <TabLayout>
      <div style={{ maxHeight: "550px", overflowY: "scroll" }}>
        <ClinicalReport />
        <ReportData />
      </div>
    </TabLayout>
  );
}

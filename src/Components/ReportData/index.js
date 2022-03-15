import React, { useContext } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import "./styles.scss";

const data = [
  ["HEMOGLOBIN", "12.0", "", "g/dL", "12 to 15"],
  ["HEMATOCRIT", "27", "L", "%", "36 to 47"],
  ["HAPTOGLOBIN", "6.0", "L", "mg/dL", "30 to 200"],
  ["PLATELET COUNT", "12.0 * 10 ^ 9", "L", "L", "150 to 400 * 10 ^ 9"],
  ["WHITE BLOOD CELL COUNT", "10 * 10 ^ 9", "", "L", "4 to 10 * 10 ^ 9"],
  ["RED BLOOD CELL COUNT", "4.29 * 10 ^ 12", "", "", "4.2 TO 5.4 * 10 ^ 12"],
  ["RETICULOCYTES", "3.0", "H", "%", "0.5 TO 1.5"],
  ["MCV", "<90", "", "fL", "80 to 100"],
  ["SERUM CREATININE", "1.51", "H", "mg/dL", "0.59 to 1.04"],
  ["LDH", "722", "H", "U/L", "50 to 150"],
  ["TROPONIN", "0.6", "H", "ng/mL", "0 to 0.4"],
  ["TOTAL BILIRUBIN", "10", "", "mol/L", "2 to 20"],
  ["INR", "1.0", "", "", "0.9 to 1.2"],
  ["FDP", "7.6", "", "mcg/mL", "<10"],
  ["CRP", "4.6", "", "mg/L", "<5"],
];

const ReportData = () => {
  const { currentHeadSet } = useContext(HeadsetContext);

  return (
    <>
      <div className="clinic-report-list">
        <div className="report-header">
          <p>Test</p>
          <p>Result</p>
          <p></p>
          <p>Units</p>
          <p>Reference Range*</p>
        </div>
        {data.map((row, index) => (
          <div
            className={`report-items-container ${
              currentHeadSet[`report_row_${index + 1}`] && "active"
            } `}
            key={index}
          >
            <img src="/reportCheck.png" alt=" select img" />
            <div className={`report-item`}>
              {row.map((column, index) => {
                return <p key={index}>{column}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
      <PregnancyTest currentHeadSet={currentHeadSet} />
      <ViralSerologies currentHeadSet={currentHeadSet} />
    </>
  );
};

export default ReportData;

const pregnancyTest = [["Urine HCG", "Negative", "-"]];

const PregnancyTest = ({ currentHeadSet }) => {
  return (
    <div className="clinic-report-list">
      <div className="report-header">
        <p></p>
        <p>Pregnancy Test</p>
        <p></p>
      </div>
      {pregnancyTest.map((row, index) => (
        <div
          className={`report-items-container
           ${currentHeadSet[`report_row_${index + 1}`] && "active"} 
           `}
          key={row[3]}
        >
          <img src="/reportCheck.png" alt=" select img" />
          <div className={`report-item`}>
            {row.map((column, index) => {
              return <p key={index}>{column}</p>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const viralSorologies = [
  ["Hepatitis C", "Negative", "-"],
  ["Hepatitis B", "Negative", "-"],
  ["HIV", "Negative", "-"],
];

const ViralSerologies = ({ currentHeadSet }) => {
  return (
    <div className="clinic-report-list">
      <div className="report-header">
        <p></p>
        <p>Viral Serologies</p>
        <p></p>
      </div>
      {viralSorologies.map((row, index) => (
        <div
          className={`report-items-container  ${
            currentHeadSet[`report_row_${index + 1}`] && "active"
          } 
          `}
          key={index}
        >
          <img src="/reportCheck.png" alt=" select img" />
          <div className={`report-item`}>
            {row.map((column, index) => {
              return <p key={index}>{column}</p>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./styles.scss";

const data = [
  ["HEMOGLOBIN", "12.0", "GdL", "12 to 15"],
  ["HEMOGLOBIN", "12.0", "%", "36 to 47"],
  ["HEMOGLOBIN", "12.0", "mg/dL", "30 to 200"],
  ["HEMOGLOBIN", "12.0", "L", "1500 to 400 * 10 ^ 6"],
  ["HEMOGLOBIN", "12.0", "GdL", "12 to 15"],
  ["HEMOGLOBIN", "12.0", "%", "36 to 47"],
  ["HEMOGLOBIN", "12.0", "mg/dL", "30 to 200"],
  ["HEMOGLOBIN", "12.0", "L", "1500 to 400 * 10 ^ 6"],
  ["HEMOGLOBIN", "12.0", "GdL", "12 to 15"],
  ["HEMOGLOBIN", "12.0", "%", "36 to 47"],
  ["HEMOGLOBIN", "12.0", "mg/dL", "30 to 200"],
  ["HEMOGLOBIN", "12.0", "L", "1500 to 400 * 10 ^ 6"],
  ["HEMOGLOBIN", "12.0", "GdL", "12 to 15"],
  ["HEMOGLOBIN", "12.0", "%", "36 to 47"],
  ["HEMOGLOBIN", "12.0", "mg/dL", "30 to 200"],
  ["HEMOGLOBIN", "12.0", "L", "1500 to 400 * 10 ^ 6"],
  ["HEMOGLOBIN", "12.0", "GdL", "12 to 15"],
  ["HEMOGLOBIN", "12.0", "%", "36 to 47"],
  ["HEMOGLOBIN", "12.0", "mg/dL", "30 to 200"],
  ["HEMOGLOBIN", "12.0", "L", "1500 to 400 * 10 ^ 6"],
];

export default function ReportData() {
  return (
    <div className="clinic-report-list">
      <div className="report-header">
        <p>Test</p>
        <p>Result</p>
        <p>Units</p>
        <p>Reference Range*</p>
      </div>
      {data.map((row, index) => {
        return (
          <div
            className={`report-items-container ${index % 2 === 0 && "active"} `}
            key={row[3]}
          >
            <img
              src={
                "https://media.istockphoto.com/vectors/green-checkmark-vector-illustration-vector-id1133442802?k=20&m=1133442802&s=612x612&w=0&h=N3UvaUREpqMYVpOV7kUrQzgpVaCgddEi-LESGeAl_FI="
              }
              alt=" select img"
            />
            <div className={`report-item`}>
              {row.map((column) => {
                return <p>{column}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

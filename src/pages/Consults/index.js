import React from "react";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

export default function ConsultScreen() {
  const doctorsData = [
    { title: "Cardiologist" },
    { title: "Nephrologist" },
    { title: "Neurologist", status: "active" },
    { title: "Hematologist", status: "active" },
  ];

  return (
    <TabLayout>
      <div className="consultants-wrapper">
        {doctorsData.map(({ title, status }) => {
          return (
            <div className="consultant-card">
              <img
                src={"/doctors.png"}
                alt="person img"
                className="person-img"
              ></img>
              <div className="title-wrapper">
                <h4>{title}</h4>
                <img
                  src={
                    "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
                  }
                  alt="play icon"
                  className="play-img"
                />
              </div>
              {status && (
                <img
                  src={"/whiteCheck.png"}
                  alt=" select img"
                  className="selected-img"
                />
              )}
            </div>
          );
        })}
      </div>
    </TabLayout>
  );
}

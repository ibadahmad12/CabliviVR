import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const ConsultScreen = () => {
  const doctorsData = [
    { title: "Cardiologist" },
    { title: "Nephrologist" },
    { title: "Neurologist", status: "active" },
    { title: "Hematologist", status: "active" },
  ];

  return (
    <RootLayout>
      <TabLayout>
        <div className="consultants-wrapper">
          {doctorsData.map(({ title, status }) => (
            <div className="consultant-card">
              <img
                src="/doctors.png"
                alt="person img"
                className="person-img"
              ></img>
              <div className="title-wrapper">
                <h4>{title}</h4>
                <img
                  src="https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
                  alt="play icon"
                  className="play-img"
                />
              </div>
              {status && (
                <img
                  src="/whiteCheck.png"
                  alt=" select img"
                  className="selected-img"
                />
              )}
            </div>
          ))}
        </div>
      </TabLayout>
    </RootLayout>
  );
};

export default ConsultScreen;

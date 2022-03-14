import React, { useContext } from "react";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import { HeadsetContext } from "../../Context/RootContext";

import "./styles.scss";

const ConsultScreen = () => {
  const { currentHeadSet } = useContext(HeadsetContext);

  const doctorsData = [
    { title: "Cardiologist", status: currentHeadSet?.cardiologist },
    { title: "Nephrologist", status: currentHeadSet?.nephrologist },
    { title: "Neurologist", status: currentHeadSet?.neurologist },
    { title: "Hematologist", status: currentHeadSet?.hematologist },
  ];

  return (
    <RootLayout>
      <TabLayout>
        <div className="consultants-wrapper">
          {doctorsData.map(({ title, status }) => (
            <div className="consultant-card" key={title}>
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

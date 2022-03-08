import React from "react";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

export default function ConsultScreen() {
  return (
    <TabLayout>
      <div className="consultants-wrapper">
        <div className="consultant-card">
          <img
            src={
              "https://www.kindpng.com/picc/m/52-526798_anonymous-person-transparent-hd-png-download.png"
            }
            alt="person img"
            className="person-img"
          ></img>
          <div className="title-wrapper">
            <h4>Cardiologist</h4>
            <img
              src={
                "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
              }
              alt="play icon"
              className="play-img"
            />
          </div>
        </div>
        <div className="consultant-card">
          <img
            src={
              "https://www.kindpng.com/picc/m/52-526798_anonymous-person-transparent-hd-png-download.png"
            }
            alt="person img"
            className="person-img"
          ></img>
          <div className="title-wrapper">
            <h4>Cardiologist</h4>
            <img
              src={
                "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
              }
              alt="play icon"
              className="play-img"
            />
          </div>
        </div>
        <div className="consultant-card">
          <img
            src={
              "https://www.kindpng.com/picc/m/52-526798_anonymous-person-transparent-hd-png-download.png"
            }
            alt="person img"
            className="person-img"
          ></img>
          <div className="title-wrapper">
            <h4>Cardiologist</h4>
            <img
              src={
                "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
              }
              alt="play icon"
              className="play-img"
            />
          </div>
          <img
            src={
              "https://cutewallpaper.org/24/white-checkmark-png/icon-checkmark-check-mark-free-transparent-png-download-pngkey.png"
            }
            alt=" select img"
            className="selected-img"
          />
        </div>
        <div className="consultant-card">
          <img
            src={
              "https://www.kindpng.com/picc/m/52-526798_anonymous-person-transparent-hd-png-download.png"
            }
            alt="person img"
            className="person-img"
          ></img>
          <div className="title-wrapper">
            <h4>Cardiologist</h4>
            <img
              src={
                "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
              }
              alt="play icon"
              className="play-img"
            />
          </div>
          <img
            src={
              "https://cutewallpaper.org/24/white-checkmark-png/icon-checkmark-check-mark-free-transparent-png-download-pngkey.png"
            }
            alt=" select img"
            className="selected-img"
          />
        </div>
      </div>
    </TabLayout>
  );
}

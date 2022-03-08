import React from "react";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

export default function OrderTest() {
  return (
    <TabLayout>
      <div className="order-wrapper">
        <h2>Order Further Tests</h2>
        <h6>Select all test you wish to order</h6>
        <div className="order-card-container">
          <div className="order-card">
            <div className="content-wrapper">
              <h4>Blood Smear</h4>
              <img
                src={
                  "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
                }
                alt="play icon"
                className="selection-img"
              />
            </div>
          </div>
          <div className="order-card active">
            <div className="content-wrapper">
              <h4>ADAMST13 Activity and Antibody</h4>
              <img
                src={
                  "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
                }
                alt="play icon"
                className="selection-img"
              />
            </div>
          </div>
          <div className="order-card">
            <div className="content-wrapper">
              <h4>Direct Antigobulin</h4>
              <img
                src={
                  "https://icon-library.com/images/play-icon-png/play-icon-png-6.jpg"
                }
                alt="play icon"
                className="selection-img"
              />
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

import React, { useContext } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const OrderTest = () => {
  const { currentHeadSet } = useContext(HeadsetContext);

  return (
    <RootLayout>
      <TabLayout>
        <div className="order-wrapper">
          <h2>Order Further Tests</h2>
          <h6>Select all tests you wish to order</h6>
          <div className="order-card-container">
            <div
              className={`order-card ${
                currentHeadSet?.blood_smear && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.blood_smear && "active-heading"
                  }`}
                >
                  Blood Smear
                </h4>
              </div>
            </div>

            <div
              className={`order-card ${currentHeadSet?.adams13 && "active"}`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${currentHeadSet?.adams13 && "active-heading"}`}
                >
                  ADAMTS13 <br /> Activity and <br />
                  Antibody
                </h4>
                <img
                  src="/greenCheck.png"
                  alt="play icon"
                  className="selection-img"
                />
              </div>
            </div>

            <div
              className={`order-card ${
                currentHeadSet?.direct_antiglobulin && "active"
              }`}
            >
              <div className="content-wrapper">
                <h4
                  className={`${
                    currentHeadSet?.direct_antiglobulin && "active-heading"
                  }`}
                >
                  Direct
                  <br /> Antiglobulin
                </h4>
              </div>
            </div>
          </div>
        </div>
      </TabLayout>
    </RootLayout>
  );
};

export default OrderTest;

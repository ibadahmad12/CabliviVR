import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import TabLayout from "../../Layouts/TabLayout";
import "./styles.scss";

const OrderTest = () => {
  return (
    <RootLayout>
      <TabLayout>
        <div className="order-wrapper">
          <h2>Order Further Tests</h2>
          <h6>Select all tests you wish to order</h6>
          <div className="order-card-container">
            <div className="order-card">
              <div className="content-wrapper">
                <h4>Blood Smear</h4>
              </div>
            </div>
            <div className="order-card active">
              <div className="content-wrapper">
                <h4 className="active-heading">
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
            <div className="order-card">
              <div className="content-wrapper">
                <h4>
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

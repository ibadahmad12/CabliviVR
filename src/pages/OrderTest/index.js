import React, { useContext } from 'react';
import { HeadsetContext } from '../../Context/RootContext';
import RootLayout from '../../Layouts/RootLayout';
import TabLayout from '../../Layouts/TabLayout';
import './styles.scss';

const OrderTest = () => {
    const { currentHeadSet } = useContext(HeadsetContext);

    return (
        <RootLayout>
            <TabLayout>
                <div className="order-wrapper">
                    <h2>Order Further Tests</h2>
                    <h6>Select all tests you wish to order</h6>
                    <div className="order-card-container">
                        <div className={`order-card ${currentHeadSet?.blood_smear && 'active'}`}>
                            <div className="content-wrapper">
                                <h4>Blood Smear</h4>
                                {currentHeadSet?.blood_smear && <img src="/greenCheck.png" alt="play icon" className="selection-img" />}
                            </div>
                        </div>

                        <div className={`order-card ${currentHeadSet?.adams13 && 'active'}`}>
                            <div className="content-wrapper">
                                <h4>
                                    ADAMTS13 <br /> Activity and <br />
                                    Antibody
                                </h4>
                                {currentHeadSet?.adams13 && <img src="/greenCheck.png" alt="play icon" className="selection-img" />}
                            </div>
                        </div>

                        <div className={`order-card ${currentHeadSet?.direct_antiglobulin && 'active'}`}>
                            <div className="content-wrapper">
                                <h4>
                                    Direct
                                    <br /> Antiglobulin
                                </h4>
                                {currentHeadSet?.direct_antiglobulin && <img src="/greenCheck.png" alt="play icon" className="selection-img" />}
                            </div>
                        </div>
                    </div>
                </div>
            </TabLayout>
        </RootLayout>
    );
};

export default OrderTest;

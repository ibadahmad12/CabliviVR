import React, { useContext } from 'react';
import RootLayout from '../../Layouts/RootLayout';
import { HeadsetContext } from '../../Context/RootContext';

import TabLayout from '../../Layouts/TabLayout';
import './styles.scss';

const Diagnosis = () => {
    const { currentHeadSet } = useContext(HeadsetContext);

    return (
        <RootLayout>
            <TabLayout>
                <div className="diagnosis-wrapper">
                    <h2>Choose a diagnosis NOW</h2>

                    <div className="diagnosis-card-container">
                        <div className={`diagnosis-card ${currentHeadSet?.itp && 'active'}`}>
                            <div className="content-wrapper">
                                <h1>ITP</h1>
                                <h4>
                                    Immune <br />
                                    Thrombocytopenia
                                </h4>
                            </div>
                        </div>

                        <div className={`diagnosis-card ${currentHeadSet?.attp && 'active'}`}>
                            <div className="content-wrapper">
                                <h1>aTTP/iTTP</h1>
                                <h4>Acquired/Immune-mediated Thrombotic Thrombocytopenic Purpura </h4>
                            </div>
                        </div>

                        <div className={`diagnosis-card ${currentHeadSet?.ahus && 'active'}`}>
                            <div className="content-wrapper">
                                <h1>aHUS</h1>
                                <h4>
                                    Atypical Hemolytic <br /> Uremic Syndrome
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </TabLayout>
        </RootLayout>
    );
};

export default Diagnosis;

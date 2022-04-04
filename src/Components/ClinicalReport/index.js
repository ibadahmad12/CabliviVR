import React from 'react';
import './styles.scss';

const ClinicalReport = () => {
    return (
        <div className="clinical-report-wrapper">
            <div>
                <h6>Clinical Laboratory Report </h6>
                <img src="/reportLogo.png" alt="logo" />
            </div>

            <div className="clinic-info">
                <div>
                    <p>Patient Name</p>
                    <p className="user-data">Jones, Gabrielle</p>
                </div>
                <div>
                    <p>Sex</p>
                    <p className="user-data">Female</p>
                </div>
                <div>
                    <p>Age</p>
                    <p className="user-data">34</p>
                </div>
                <div>
                    <p>Ordering Physician</p>
                    <p className="user-data">Miller 36563267</p>
                </div>
            </div>
        </div>
    );
};

export default ClinicalReport;

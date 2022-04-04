import React from 'react';
import RootContext from '../Context/RootContext';

const RootLayout = ({ children }) => {
    return (
        <>
            <img src="/logo.png" alt="logo" className="cablivi-logo" />
            <div className="page-wrappers">{children}</div>
        </>
    );
};

export default RootLayout;

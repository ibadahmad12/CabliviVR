import React, { useState } from 'react';
import RootLayout from '../Layouts/RootLayout';
import { useNavigate } from 'react-router-dom';
import '../pages/Auth/styles.scss';

function HeadsetForm() {
    const [headsetNo, setHeadsetNo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setHeadsetNo(headsetNo);
        navigate('/headsets/' + headsetNo);
    };

    return (
        <RootLayout>
            <div className="headset-form-wrapper">
                <h4>Enter Headset Number</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Sticker Number"
                        type="text"
                        required
                        value={headsetNo}
                        pattern="[A-Za-z0-9]{6}"
                        onChange={(e) => setHeadsetNo(e.target.value)}
                    />
                    <div className="button-wrapper">
                        <button type="submit" className="headset-search-btn">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </RootLayout>
    );
}

export default HeadsetForm;

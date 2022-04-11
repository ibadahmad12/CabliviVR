import React, { useContext, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadsetContext } from '../../Context/RootContext';
import { buttons } from './Buttons';
import { convertDateToUCT } from '../../_helpers';
import './styles.scss';

let activeButtonId = 0;

const Tab = () => {
    const navigate = useNavigate();
    const contextData = useContext(HeadsetContext);
    const [id, setId] = useState(0);

    const getTime = useMemo(() => {
        let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date));
        var suffix = date.getHours() >= 12 ? 'PM' : 'AM';
        var hours = ((date.getHours() + 11) % 12) + 1;
        return hours + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + suffix;
    }, [contextData]);

    useEffect(() => {
        if (window.location.href.split('/').pop() === 'report') {
            activeButtonId = 0;
            setId(Math.random());
        }
    }, []);

    const getDate = useMemo(() => {
        let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date));
        return date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear();
    }, [contextData]);

    const switchTabs = (event, index) => {
        activeButtonId = index;
        navigate(event);
    };

    return (
        <div className="tab-container">
            <div className="user-info">
                <div>
                    <>
                        <button className="control-btns" onClick={() => navigate('/headsets/' + contextData.currentHeadSet.last_six_serial_no)}>
                            Headset List
                        </button>
                        <button className="control-btns" onClick={() => navigate('/headset-form')}>
                            New Entry
                        </button>
                    </>
                    <h6>
                        Session : {getDate} at {getTime} (CDT)
                    </h6>
                </div>
                <div className="headset-info">
                    <h5>{contextData?.currentHeadSet?.device_serial_no.slice(-6)}</h5>
                    <p>Headset Number</p>
                </div>
            </div>
            <div className="tab-buttons-container">
                {buttons.map(({ text, event }, index) => (
                    <button className={`${activeButtonId === index && 'active'}`} onClick={() => switchTabs(event, index)} key={index}>
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tab;

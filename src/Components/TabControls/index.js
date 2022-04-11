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

    const convertToHHMMSS = (val) => {
        return val < 10 ? '0' + val : val;
    };

    const getTime = useMemo(() => {
        let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date)).split(' ')[1];

        var suffix = date.slice(0, 2) >= 12 ? 'PM' : 'AM';
        var hours = ((parseInt(date.slice(0, 2)) + 11) % 12) + 1;

        // return convertToHHMMSS(hours) + ':' + convertToHHMMSS(date.getMinutes()) + ':' + convertToHHMMSS(date.getSeconds()) + ' ' + suffix;

        return convertToHHMMSS(hours) + date.slice(2) + ' ' + suffix;
    }, [contextData]);

    useEffect(() => {
        if (window.location.href.split('/').pop() === 'report') {
            activeButtonId = 0;
            setId(Math.random());
        }
    }, []);

    const getDate = useMemo(() => {
        let date = convertDateToUCT(parseInt(contextData.currentHeadSet?.date));

        return date?.split(' ')[0];
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
                        Session : {getDate} at {getTime} (local)
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

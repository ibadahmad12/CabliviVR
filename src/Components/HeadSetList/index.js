import React, { useContext, useState, useEffect } from 'react';
import { HeadsetContext } from '../../Context/RootContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { convertDateToUCT } from '../../_helpers';
import RootLayout from '../../Layouts/RootLayout';
import './styles.scss';

const heading = ['Headset', 'Date', 'Time (Local)', 'Action'];

const List = () => {
    const [headsetsData, setHeadListData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://cabilivi-backend.herokuapp.com/users/getHeadsets/${window.location.href.split('/').pop()}`)
            .then(({ data }) => setHeadListData(data));
    }, []);

    return (
        <RootLayout>
            <div className="table-container">
                <h4>Select Headset from List</h4>
                <div className="table">
                    <div>
                        <div className="table-heading">
                            {heading.map((head, index) => (
                                <div className="table-column" key={index}>
                                    {head}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <TableRow data={[].concat(headsetsData).reverse()} />
                    </div>
                </div>
                <button className="new-entry-btn" onClick={() => navigate('/headset-form')}>
                    New Entry
                </button>
            </div>
        </RootLayout>
    );
};

export default List;

const TableRow = ({ data }) => {
    const navigate = useNavigate();
    const contextData = useContext(HeadsetContext);

    var getDate = (stringDate) => {
        let date = convertDateToUCT(parseInt(stringDate));

        return date?.split(' ')[0];
    };

    const getTime = (stringDate) => {
        let date = convertDateToUCT(parseInt(stringDate)).split(' ')[1];

        var suffix = date.slice(0, 2) >= 12 ? 'PM' : 'AM';
        var hours = ((parseInt(date.slice(0, 2)) + 11) % 12) + 1;

        // return convertToHHMMSS(hours) + ':' + convertToHHMMSS(date.getMinutes()) + ':' + convertToHHMMSS(date.getSeconds()) + ' ' + suffix;

        return convertToHHMMSS(hours) + date.slice(2) + ' ' + suffix;
    };

    const convertToHHMMSS = (val) => {
        return val < 10 ? '0' + val : val;
    };

    const storeHeadSetData = (data) => {
        contextData.setCurrentHeadset(data);
        navigate('/report');
    };

    return (
        <div>
            {data?.map((val, index) => (
                <div className="table-row" onClick={() => storeHeadSetData(val)} key={index}>
                    <div className={'table-column'}>
                        <p>{val?.device_serial_no.slice(-6)}</p>
                    </div>
                    <div className={'table-column'}>
                        <p>{getDate(val?.date)}</p>
                    </div>
                    <div className={'table-column'}>
                        <p>{getTime(val?.date)}</p>
                    </div>
                    <div className="table-column">
                        <button className="view-btn">View</button>
                    </div>
                </div>
            ))}
            {!data.length && <h3 className="loading-text"> Loading .... </h3>}
        </div>
    );
};

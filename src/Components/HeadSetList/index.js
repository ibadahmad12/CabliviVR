import React, { useContext, useState, useEffect } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const heading = ["Headset", "Date", "Time", "Action"];

const List = ({ id }) => {
  const [headsetsData, setHeadListData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cabilivi-backend.herokuapp.com/users/getHeadsets/${id}`)
      .then(({ data }) => setHeadListData(data));
  }, []);

  return (
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
          <TableRow data={headsetsData} />
        </div>
      </div>
    </div>
  );
};

export default List;

const TableRow = ({ data }) => {
  const navigate = useNavigate();
  const contextData = useContext(HeadsetContext);

  const getDate = (stringDate) => {
    let date = new Date(parseInt(stringDate) * 1000);
    return (
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date?.getFullYear()
    );
  };

  const getTime = (stringDate) => {
    let date = new Date(parseInt(stringDate) * 1000);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  };

  const storeHeadSetData = (data) => {
    contextData.setCurrentHeadset(data);
    navigate("/report");
  };

  return (
    <div>
      {data.map((val, index) => (
        <div
          className="table-row"
          onClick={() => storeHeadSetData(val)}
          key={index}
        >
          <div className={"table-column"}>
            <p>{val?.device_serial_no.slice(-6)}</p>
          </div>
          <div className={"table-column"}>
            <p>{getDate(val?.date)}</p>
          </div>
          <div className={"table-column"}>
            <p>{getTime(val?.date)}</p>
          </div>
          <div className="table-column">
            <button className="view-btn">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

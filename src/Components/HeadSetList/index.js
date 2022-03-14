import React, { useContext } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const List = ({ headsetsData }) => {
  var heading = ["Headset", "Date", "Time", "Action"];

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
      date.getDate() + "/" + date.getMonth() + 1 + "/" + date?.getFullYear()
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
            {val?.device_serial_no.slice(-4)}
          </div>
          <div className={"table-column"}>{getDate(val?.date)}</div>
          <div className={"table-column"}>{getTime(val?.date)}</div>
          <div className="table-column">
            <button className="view-btn">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import { HeadsetContext } from "../../Context/RootContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { convertDateToUCT } from "../../_helpers";
import "./styles.scss";

const heading = ["Headset", "Date", "Time (CDT)", "Action"];

const List = ({ id }) => {
  const [headsetsData, setHeadListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/users/getHeadsets/${id}`)
      .then(({ data }) => setHeadListData(data));
  }, [id]);

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
      <button
        className="new-entry-btn"
        onClick={() =>
          navigate("/", {
            state: {
              headsetForm: true,
            },
          })
        }
      >
        New Entry{" "}
      </button>
    </div>
  );
};

export default List;

const TableRow = ({ data }) => {
  const navigate = useNavigate();
  const contextData = useContext(HeadsetContext);

  const getDate = (stringDate) => {
    let date = convertDateToUCT(parseInt(stringDate));

    return (
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date?.getFullYear()
    );
  };

  const getTime = (stringDate) => {
    let date = convertDateToUCT(parseInt(stringDate));

    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  };

  const storeHeadSetData = (data) => {
    contextData.setCurrentHeadset(data);
    navigate("/report");
  };

  return (
    <div>
      {data?.map((val, index) => (
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
      {!data.length && <h3 className="loading-text"> Loading .... </h3>}
    </div>
  );
};

import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const List = () => {
  var heading = ["Headset", "Date", "Time", "Action"];
  var body = [
    ["4347", "4/12/2022", "14:23", "View"],
    ["4347", "4/12/2022", "11:46", "View"],
    ["4347", "4/12/2022", "16:34", "View"],
    ["4347", "4/12/2022", "14:10", "View"],
    ["4347", "4/12/2022", "16:12", "View"],
    ["4347", "4/12/2022", "09:13", "View"],
    ["4347", "4/12/2022", "07:09", "View"],
    ["4347", "4/12/2022", "02:08", "View"],
    ["4347", "4/12/2022", "14:23", "View"],
    ["4347", "4/12/2022", "11:46", "View"],
    ["4347", "4/12/2022", "16:34", "View"],
    ["4347", "4/12/2022", "14;10", "View"],
  ];

  return (
    <div className="table-container">
      <h4>Select Headset from List</h4>
      <div className="table">
        <div>
          <div className="table-heading">
            {heading.map((head) => (
              <div className="table-column">{head}</div>
            ))}
          </div>
        </div>
        <div>
          {body.map((row) => (
            <TableRow row={row} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

const TableRow = ({ row }) => {
  const navigate = useNavigate();

  const headsetSearch = () => {
    navigate("/report");
  };

  return (
    <div className="table-row">
      {row.map((val, index) => (
        <div className={`table-column `} onClick={headsetSearch}>
          {index === 3 ? <button className="view-btn">View</button> : val}
        </div>
      ))}
    </div>
  );
};

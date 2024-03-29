import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div type="button" className="ui basic green button">
            Approve
          </div>
          <div type="button" className="ui basic red button">
            Reject
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;

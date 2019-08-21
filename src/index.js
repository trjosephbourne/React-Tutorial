import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function getAuthor() {
  return faker.hacker.adjective() + " " + faker.hacker.noun();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          time="Tomorrow at 2:22 AM"
          avatar={faker.image.avatar()}
          author={getAuthor()}
          text={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          time="Today at 11:59 PM"
          avatar={faker.image.avatar()}
          author={getAuthor()}
          text={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          time="Dec. 25 at 3:33 PM"
          avatar={faker.image.avatar()}
          author={getAuthor()}
          text={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          time="Jun. 9 at 1:23 PM"
          avatar={faker.image.avatar()}
          author={getAuthor()}
          text={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          time="Apr. 20 at 4:20 PM"
          avatar={faker.image.avatar()}
          author={getAuthor()}
          text={faker.hacker.phrase()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

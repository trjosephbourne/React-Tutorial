import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

function getAuthor() {
  return faker.hacker.adjective() + " " + faker.hacker.noun();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        time="Apr. 20 at 4:20 PM"
        avatar={faker.image.avatar()}
        author={getAuthor()}
        text={faker.hacker.phrase()}
      />
      <CommentDetail
        time="Jun. 9 at 1:23 PM"
        avatar={faker.image.avatar()}
        author={getAuthor()}
        text={faker.hacker.phrase()}
      />
      <CommentDetail
        time="Dec. 25 at 3:33 PM"
        avatar={faker.image.avatar()}
        author={getAuthor()}
        text={faker.hacker.phrase()}
      />
      <CommentDetail
        time="Today at 11:59 PM"
        avatar={faker.image.avatar()}
        author={getAuthor()}
        text={faker.hacker.phrase()}
      />
      <CommentDetail
        time="Tomorrow at 2:22 AM"
        avatar={faker.image.avatar()}
        author={getAuthor()}
        text={faker.hacker.phrase()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

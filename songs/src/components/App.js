import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="ui center aligned segment eight wide column">
          <div className="">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

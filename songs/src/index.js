import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import redurces from "./redurces";
import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(redurces)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

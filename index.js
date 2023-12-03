import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import 'bootstrap/dist/css/bootstrap.css';
import { store } from "./src/features/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

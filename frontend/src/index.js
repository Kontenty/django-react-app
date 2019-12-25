import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplqate from "react-alert-template-basic";

import store from "./store";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import Alert from "./components/layout/Alert";

const alertOptions = {
  timeout: 6000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Alert />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplqate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.querySelector("#app")
);

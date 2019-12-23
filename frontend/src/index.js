import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);

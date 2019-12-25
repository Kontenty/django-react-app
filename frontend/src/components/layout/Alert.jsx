import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

function alertReducer(state, action) {
  switch (action.type) {
    case value:
      break;

    default:
      return state;
  }
}

const Alert = props => {
  const alert = useAlert();

  useEffect(() => {
    const { status, msg } = props.error;
    const { message } = props;
    if (status) {
      Object.keys(msg).map(key => {
        alert.error(`${key}: ${msg[key].join()}`);
      });
    }
    if (message && message.length() > 0) alert.success(message);
  }, [props.error]);

  return <></>;
};

Alert.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(Alert);

import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

const Alert = props => {
  const alert = useAlert();

  useEffect(() => {
    const { status, msg } = props.error;
    if (status) {
      Object.keys(msg).map(key => {
        alert.error(
          `${key}: ${Array.isArray(msg[key]) ? msg[key].join() : msg[key]}`
        );
      });
    }
  }, [props.error]);

  useEffect(() => {
    if (props.message && props.message.length() > 0)
      alert.success(props.message);
  }, [props.message]);

  return <></>;
};

Alert.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Alert);

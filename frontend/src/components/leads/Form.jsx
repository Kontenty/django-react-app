import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  hadleInput = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addLead(this.state);
  };

  render() {
    return (
      <div className="card mt-4 mb-4">
        <div className="card-body">
          <h2 className="card-title">Add lead</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nameInput'>Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                id='nameInput'
                onChange={this.hadleInput}
                value={this.state.name}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='emailInput'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='emailInput'
                onChange={this.hadleInput}
                value={this.state.email}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='messageInput'>Message</label>
              <textarea
                className='form-control'
                name='message'
                id='messageInput'
                onChange={this.hadleInput}
                value={this.state.message}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
          </button>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  addLead: PropTypes.func.isRequired
};

export default connect(null, { addLead })(Form);

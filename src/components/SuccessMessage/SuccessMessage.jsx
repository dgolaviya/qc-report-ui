import React, { Component } from 'react';
import { Icon } from 'react-materialize';

class SuccessMessage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.closeNotification();
    }, 1000);
  }

  render() {
    return (
      <div className="flex d-row green white-text py-10">
        <div className="flex d-row">
          <Icon className="px-20">check_circle</Icon>
          {this.props.messageText}
        </div>
      </div>
    )
  }
}
export default SuccessMessage;

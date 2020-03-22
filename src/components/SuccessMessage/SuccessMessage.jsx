import React from 'react';
import { Icon } from 'react-materialize';

const SuccessMessage = ({ messageText }) => {
  return (
    <div className="flex d-row green white-text py-10">
      <div className="flex d-row">
        <Icon className="px-20">check_circle</Icon>
        {messageText}
      </div>
    </div>
  )
};

export default SuccessMessage;

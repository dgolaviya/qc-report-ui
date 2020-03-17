import React from 'react';
import { Icon } from 'react-materialize';

const TopHeader = () => {
  return (
    <div className="flex d-row a-i-center j-c-between top-header">
      <div className="title px-10">QC Reports</div>
      <div className="flex d-row a-i-center">
        <Icon className="light-green-text fs-25 pr-15">notification_important</Icon>
        <Icon className="orange-text pr-15 fs-25">message</Icon>
        <Icon className="light-blue-text text-darken-2 pr-10" medium>account_circle</Icon>
      </div>
    </div>
  )
};

export default TopHeader;

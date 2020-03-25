import React from 'react';
import Card from '../Card';
import ContentHeader from "../ContentHeader";

const ReportDashboard = () => {
  return (
    <>
      <ContentHeader />
      <div className="content flex d-col">
        <div>
          <div className="separator grey-text text-darken-1">March 2020</div>
          <div className="py-20"><Card title="Monthly Regent Report" month={2} year={2020} /></div>
        </div>
        <div>
          <div className="separator grey-text text-darken-1">February 2020</div>
          <div className="py-20"><Card title="Monthly Regent Report" month={1} year={2020} /></div>
        </div>
        <div>
          <div className="separator grey-text text-darken-1">January 2020</div>
          <div className="py-20"><Card title="Monthly Regent Report" month={0} year={2020} /></div>
        </div>
      </div>
    </>
  )
};

export default ReportDashboard;

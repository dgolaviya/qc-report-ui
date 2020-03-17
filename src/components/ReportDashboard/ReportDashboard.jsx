import React from 'react';
import Card from '../Card';
import ContentHeader from "../ContentHeader";

const ReportDashboard = () => {
  return (
    <>
      <ContentHeader />
      <div className="content flex d-col">
        <div>
          <div className="separator grey-text text-darken-1">January 2020</div>
          <Card title="QC-summary" />
          <Card title="QC-detail-1" />
          <Card title="QC-detail-2" />
        </div>
        <div>
          <div className="separator grey-text text-darken-1">February 2020</div>
          <Card title="QC-summary" />
          <Card title="QC-detail-1" />
          <Card title="QC-detail-2" />
        </div>
        <div>
          <div className="separator grey-text text-darken-1">March 2020</div>
          <Card title="QC-summary" />
          <Card title="QC-detail-1" />
          <Card title="QC-detail-2" />
        </div>
      </div>
    </>
  )
};

export default ReportDashboard;

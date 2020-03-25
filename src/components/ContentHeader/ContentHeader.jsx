import React, { Component } from 'react';
import { Select } from 'react-materialize';

class ContentHeader extends Component {
render ()  {
  return (
    <div className="content-header flex d-row j-c-end">
      <Select
        label="Report Year"
        onChange={function noRefCheck() { }}
        value="2020"
      >
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </Select>
    </div>
  )
}
}

export default ContentHeader;

import React from 'react';
import { Select, TextInput, Icon, Button, Table } from 'react-materialize';

const RegentReport = () => {
  return (
    <>
      <div className="content-header flex d-row f-wrap">
        <TextInput label="S/N" value="2007730" placeholder="Enter SN" />
        <TextInput label="Mediserve" value="11448" placeholder="Enter Mediserve" />
        <TextInput label="Acceptable Limits" disabled value="2C-8C" />
        <Select
          label="Report Month"
          onChange={function noRefCheck() { }}
          value="October"
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
        </Select>
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
        <div className="ml-20 flex d-row a-i-center">
          <Button
            className="blue"
            icon={<Icon>save</Icon>}
            node="button"
            waves="light"
          />
        </div>
      </div>
      <div className="content flex d-col">
        <Table>
          <thead>
            <tr>
              <th data-field="id">
                Name
        </th>
              <th data-field="name">
                Item Name
        </th>
              <th data-field="price">
                Item Price
        </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Alvin
        </td>
              <td>
                Eclair
        </td>
              <td>
                $0.87
        </td>
            </tr>
            <tr>
              <td>
                Alan
        </td>
              <td>
                Jellybean
        </td>
              <td>
                $3.76
        </td>
            </tr>
            <tr>
              <td>
                Jonathan
        </td>
              <td>
                Lollipop
        </td>
              <td>
                $7.00
        </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default RegentReport;

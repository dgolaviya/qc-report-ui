import React, { Component } from 'react';
import { Select, TextInput, Icon, Button, Table } from 'react-materialize';
import EditRegentReport from './EditRegentReport';

class RegentReport extends Component {
  state = {
    showEditDialogue: false,
    tableData: [
      {
        day: 1,
        upper: 6,
        lower: 4,
        chart: 4,
        digital: 5,
        balChk: true,
        au: 'A',
        tech: 'John'
      },
      {
        day: 2,
        upper: 7,
        lower: 3,
        chart: 5,
        digital: 5,
        balChk: true,
        au: 'U',
        tech: 'James'
      },
      {
        day: 3,
        upper: 5,
        lower: 2,
        chart: 3,
        digital: 4,
        balChk: true,
        au: 'A',
        tech: 'Jigar'
      },
      {
        day: 4,
        upper: 6,
        lower: 4,
        chart: 5,
        digital: 2,
        balChk: true,
        au: 'U',
        tech: 'Kashyap'
      },
      {
        day: 5,
        upper: 8,
        lower: 4,
        chart: 4,
        digital: 6,
        balChk: true,
        au: 'A',
        tech: 'Divyang'
      }
    ]
  }
  showEditDialogue = () => {
    this.setState({ showEditDialogue: true });
  };
  hideEditDialogue = () => {
    this.setState({ showEditDialogue: false });
  };
  render() {
    return (
      <>
        <div className="content-header flex d-row f-wrap">
          <TextInput label="S/N" value="2007730" placeholder="Enter SN" />
          <TextInput label="Mediserve" value="11448" placeholder="Enter Mediserve" />
          <TextInput label="Acceptable Limits" disabled value="2&#8451;-8&#8451;" />
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
          <Table className="centered highlight responsive-table">
            <thead>
              <tr>
                <th data-field="day">Day</th>
                <th data-field="chart">Chart</th>
                <th data-field="upper">Upper</th>
                <th data-field="lower">Lower</th>
                <th data-field="digital">Digital</th>
                <th data-field="range">Range</th>
                <th data-field="bal-chk">Bal Chk</th>
                <th data-field="au">A/U</th>
                <th data-field="tech">Tech</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map(item => (
                <tr key={item.day}>
                  <td>{item.day}</td>
                  <td>{item.chart}&#8451;</td>
                  <td>{item.upper}&#8451;</td>
                  <td>{item.lower}&#8451;</td>
                  <td>{item.digital}&#8451;</td>
                  <td>(2&#8451;-8&#8451;)</td>
                  <td><Icon className="green-text">check_circle</Icon></td>
                  <td>{item.au}</td>
                  <td>{item.tech}</td>
                  <td>
                    <div onClick={this.showEditDialogue}>
                      <Button
                        floating
                        className="orange"
                        icon={<Icon>edit</Icon>}
                        node="button"
                        waves="light"
                      />
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {this.state.showEditDialogue && <EditRegentReport hideEditDialogue={this.hideEditDialogue} />}
        </div>
      </>
    )
  }
};

export default RegentReport;
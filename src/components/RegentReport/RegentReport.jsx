import React, { Component } from 'react';
import { Select, TextInput, Icon, Button, Table } from 'react-materialize';
import EditRegentReport from './EditRegentReport';
import { connect } from "react-redux";
import { getRegantChartDetails } from "../../actions/actions";


class RegentReport extends Component {
  state = {
    showEditDialogue: false,
    isContentEditable: false,
    name: "Reg3",
    serialNo: 's56',
    range:'2&#8451;-8&#8451;',
    day:'',
    chart:'',
    month: "March",
    year: 2020
  }
  componentDidMount() {
    const regantChart = {
      name: this.state.name,
      month: this.state.month,
      year: this.state.year
    }
    this.props.getRegantChartDetails(regantChart);
  }
  toggleIsContentEditable = () => {
    this.setState(prevState => ({ isContentEditable: !prevState.isContentEditable }));
  }
  showEditDialogue = param => () => {
    this.setState({ showEditDialogue: true });
    this.setState({ day: param });
  };
  hideEditDialogue = () => {
    this.setState({ showEditDialogue: false });
  };
  refereshData = () => {
    const regantChart = {
      name: this.state.name,
      month: this.state.month,
      year: this.state.year
    }
    this.props.getRegantChartDetails(regantChart);
  };
  render() {
    const dcKeys = Object.keys(this.props.dataCollection) || [];
    const { dataCollection } = this.props;
    const isHeaderFormEditable = !this.state.isContentEditable;
    const handleChangeMonth = event => {
      console.log("Event called" + event.target.value)
      this.setState({ month: event.target.value });
      const regantChart = {
        name: this.state.name,
        month: event.target.value,
        year: this.state.year
      }
      this.props.getRegantChartDetails(regantChart);
    };
    const handleChangeYear = event => {
      console.log("Event called" + event.target.value)
      this.setState({ year: event.target.value });
      const regantChart = {
        name: this.state.name,
        month: this.state.month,
        year: event.target.value
      }
      this.props.getRegantChartDetails(regantChart);
    };
    return (
      <>
        <div className="content-header flex d-row f-wrap">
          <TextInput disabled={isHeaderFormEditable} label="S/N" defaultValue={this.state.serialNo} placeholder="Enter SN" />
          <TextInput disabled={isHeaderFormEditable} label="Mediserve" defaultValue="11448" placeholder="Enter Mediserve" />
          <TextInput disabled={isHeaderFormEditable} label="Acceptable Limits" value="2&#8451;-8&#8451;" />
          <Select
            disabled={isHeaderFormEditable}
            label="Report Month"
            onChange={handleChangeMonth}
            value={this.state.month}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
          </Select>
          <Select
            disabled={isHeaderFormEditable}
            label="Report Year"
            onChange={handleChangeYear}
            value={this.state.year}
          >
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </Select>
          <div className="ml-20 flex d-row a-i-center">
            {this.state.isContentEditable ? (<Button
              className="blue"
              onClick={this.toggleIsContentEditable}
              icon={<Icon>save</Icon>}
              node="button"
              waves="light"
            />) :
              <Button
                onClick={this.toggleIsContentEditable}
                className="orange"
                icon={<Icon>edit</Icon>}
                node="button"
                waves="light"
              />}
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
              {dcKeys.map(dcKey => (
                <tr key={dcKey}>
                  <td>{dataCollection[dcKey].day}</td>
                  <td>{dataCollection[dcKey].chart}&#8451;</td>
                  <td>{dataCollection[dcKey].upper}&#8451;</td>
                  <td>{dataCollection[dcKey].lower}&#8451;</td>
                  <td>{dataCollection[dcKey].digital}&#8451;</td>
                  <td>(2&#8451;-8&#8451;)</td>
                  <td><Icon className="green-text">check_circle</Icon></td>
                  <td>{dataCollection[dcKey].au}</td>
                  <td>{dataCollection[dcKey].tech}</td>
                  <td>
                    <div onClick={this.showEditDialogue(dataCollection[dcKey].day)}>
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
          {this.state.showEditDialogue && <EditRegentReport name = {this.state.name}
                                                            month={this.state.month} 
                                                            year={this.state.year}
                                                            serialNo={this.state.serialNo}
                                                            day={this.state.day}  
                                                            range={this.state.range}
                                                            chart={dataCollection[this.state.day].chart}
                                                            upper={dataCollection[this.state.day].upper}
                                                            lower={dataCollection[this.state.day].lower}
                                                            digital={dataCollection[this.state.day].digital}
                                                            batCheck={dataCollection[this.state.day].batCheck}
                                                            au={dataCollection[this.state.day].au} hideEditDialogue={this.hideEditDialogue}
                                                            refereshData={this.refereshData} />}
        </div>
      </>
    )
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  dataCollection: state.regentChart.dataCollection
});

const mapDispatchToProps = (dispatch) => ({
  getRegantChartDetails: (regentChartData) => dispatch(getRegantChartDetails(regentChartData))
});


//export default RegentReport;
export default connect(mapStateToProps, mapDispatchToProps)(RegentReport);
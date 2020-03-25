import React, { Component } from 'react';
import { Select, TextInput, Icon, Button, Preloader } from 'react-materialize';
import EditRegentReport from './EditRegentReport';
import { connect } from "react-redux";
import { getRegantChartDetails, createRegentChart } from "../../actions/actions";
import RegentTable from './RegentTable';

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023, 2024];

class RegentReport extends Component {
  constructor(props) {
    super(props)
    const queryParams = new URLSearchParams(this.props.location.search);
    this.state = {
      isEditDialogueOpen: false,
      isContentEditable: false,
      name: "Reg3",
      serialNo: "S56",
      month: queryParams.get("month") || new Date().getMonth(),
      year: queryParams.get("year") || new Date().getFullYear(),
      selectedDc: []
    }
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
  showEditDialogue = (dataCollection) => () => {
    this.setState({ isEditDialogueOpen: true, selectedDc: dataCollection });
  };
  hideEditDialogue = () => {
    this.setState({ isEditDialogueOpen: false });
  };
  handleChangeMonth = event => {
    this.setState({ month: event.target.value });
    const regantChart = {
      name: this.state.name,
      month: event.target.value,
      year: this.state.year
    }
    this.props.getRegantChartDetails(regantChart);
  };
  handleChangeYear = event => {
    this.setState({ year: event.target.value });
    const regantChart = {
      name: this.state.name,
      month: this.state.month,
      year: event.target.value
    }
    this.props.getRegantChartDetails(regantChart);
  };

  generateBlankReport = () => {
    const regantChart = {
      name: this.state.name,
      month: this.state.month,
      year: this.state.year,
      serialNo: this.state.serialNo,
      range: '2C-8C'
    }
    this.props.createRegentChart(regantChart);
  }

  render() {
    const { error, loading, serialNo } = this.props;
    const isHeaderFormEditable = !this.state.isContentEditable;
    return (
      <>
        <div className="content-header flex d-row f-wrap">
          <TextInput
            disabled={isHeaderFormEditable}
            label="S/N"
            value={serialNo}
            placeholder="Enter SN"
          />
          <TextInput
            disabled={isHeaderFormEditable}
            label="Mediserve"
            defaultValue="11448"
            placeholder="Enter Mediserve"
          />
          <TextInput
            disabled
            label="Acceptable Limits"
            value="2&#8451;-8&#8451;"
          />
          <Select
            disabled={isHeaderFormEditable}
            label="Report Month"
            onChange={this.handleChangeMonth}
            value={this.state.month}
          >
            {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
          </Select>
          <Select
            disabled={isHeaderFormEditable}
            label="Report Year"
            onChange={this.handleChangeYear}
            value={this.state.year}
          >
            {years.map(year => <option key={year} value={year}>{year}</option>)}
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
          {error && <div className="flex d-col a-i-center">
            <div className="py-10">
              {error}
            </div>
            <div>
              <Button
                onClick={this.generateBlankReport}
                className="blue"
                node="button"
                waves="light"
              >Generate Blank Report</Button>
            </div>
          </div>}
          {loading && (
            <div className="flex d-row j-c-center a-i-center preloader">
              <Preloader
                active
                color="blue"
                flashing={false}
                size="big"
              />
            </div>
          )}
          {
            (!error && !loading) && <RegentTable
              month={this.state.month}
              showEditDialogue={this.showEditDialogue}
              name={this.state.name}
              year={this.state.year}
            />
          }
          {this.state.isEditDialogueOpen && <EditRegentReport
            hideEditDialogue={this.hideEditDialogue}
            dataCollection={this.state.selectedDc}
            selectedMonth={this.state.month}
            selectedYear={this.state.year}
          />}
        </div>
      </>
    )
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.regentChart.error,
  loading: state.regentChart.loading,
  serialNo: state.regentChart.serialNo
});

const mapDispatchToProps = (dispatch) => ({
  getRegantChartDetails: (regentChartData) => dispatch(getRegantChartDetails(regentChartData)),
  createRegentChart: (regentChartData) => dispatch(createRegentChart(regentChartData))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegentReport);
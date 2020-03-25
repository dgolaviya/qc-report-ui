import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'react-materialize';

import { getRegantChartDetails } from "../../actions/actions";

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

class RegentTable extends Component {

  componentDidUpdate(prevProps, prevState) {
    const regantChart = {
      name: this.props.name,
      month: this.props.month,
      year: this.props.year
    }
    if (this.props.showSuccessMessage === true) {
      this.props.getRegantChartDetails(regantChart);
    }
  }
  render() {
    const { dataCollection, month, showEditDialogue } = this.props;
    const dcKeys = Object.keys(dataCollection) || [];
    return (
      <Table className="centered highlight responsive-table">
        <thead>
          <tr>
            <th data-field="day">Day</th>
            <th data-field="chart">Chart</th>
            <th data-field="upper">Upper</th>
            <th data-field="lower">Lower</th>
            <th data-field="digital">Digital</th>
            <th data-field="range">Range</th>
            <th data-field="bal-chk">Battery Chk</th>
            <th data-field="au">A/U</th>
            <th data-field="tech">Tech</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dcKeys.map(dcKey => (
            <tr key={dcKey}>
              <td>{dataCollection[dcKey].day}-{months[month]}</td>
              <td>{dataCollection[dcKey].chart && <span>{dataCollection[dcKey].chart}&#8451;</span>}</td>
              <td>{dataCollection[dcKey].upper && <span>{dataCollection[dcKey].upper}&#8451;</span>}</td>
              <td>{dataCollection[dcKey].lower && <span>{dataCollection[dcKey].lower}&#8451;</span>}</td>
              <td>{dataCollection[dcKey].digital && <span>{dataCollection[dcKey].digital}&#8451;</span>}</td>
              <td>(2&#8451;-8&#8451;)</td>
              <td><Icon className="green-text">check_circle</Icon></td>
              <td>{dataCollection[dcKey].au}</td>
              <td>{dataCollection[dcKey].userId}</td>
              <td>
                <div onClick={showEditDialogue(dataCollection[dcKey])}>
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
    )
  }
}

const mapStateToProps = state => ({
  dataCollection: state.regentChart.dataCollection,
  showSuccessMessage: state.regentChart.showSuccessMessage
});

const mapDispatchToProps = (dispatch) => ({
  getRegantChartDetails: (regentChartData) => dispatch(getRegantChartDetails(regentChartData))
});


export default connect(mapStateToProps, mapDispatchToProps)(RegentTable);

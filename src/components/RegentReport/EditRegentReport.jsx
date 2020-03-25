import React, { Component } from 'react';
import { Range, Icon, Checkbox, RadioGroup, Button } from 'react-materialize';
import { updateRegantChartDetails, resetSuccessMessage } from "../../actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SuccessMessage from '../SuccessMessage';

export class EditRegentReport extends Component {
  state = {
    au: this.props.dataCollection.au
  }

  submitRegentData = (event) => {
    event.preventDefault();
    const regantChart = {
      name: 'Reg3',
      serialNo: this.props.serialNo,
      range: '2C-8C',
      month: this.props.selectedMonth,
      year: this.props.selectedYear,
      day: this.props.dataCollection.day,
      chart: event.target['chart'].value,
      upper: event.target['upper'].value,
      lower: event.target['lower'].value,
      digital: event.target['digital'].value,
      au: this.state.au,
      batCheck: event.target['batChk'].checked,
      userId: this.props.user.name
    };
    this.props.updateRegantChartDetails(regantChart);
  }
  closeNotification = () => {
    this.props.resetSuccessMessage()
    this.props.hideEditDialogue();
  }
  onAUChange = (event) => {
    this.setState({ au: event.target.value });
  }
  render() {
    const { userId, chart, lower, upper, digital, batCheck } = this.props.dataCollection;
    const { showSuccessMessage } = this.props;
    return (
      <div className="flex d-col edit-regent-report">
        <div onClick={this.props.hideEditDialogue} className="flex d-row w-100 j-c-end">
          <Icon>close</Icon>
        </div>
        <div className="title">Regent Report edited by {userId}</div>
        {showSuccessMessage && <SuccessMessage closeNotification={this.closeNotification} messageText="Data saved successfully " />}
        {!showSuccessMessage && (
          <form onSubmit={this.submitRegentData}>
            <label>
              <span>Chart</span>
              <Range
                min="2"
                max="8"
                step="0.1"
                name="chart"
                defaultValue={chart}
              />
            </label>
            <label>
              <span>Upper</span>
              <Range
                min="2"
                max="8"
                step="0.1"
                defaultValue={upper}
                name="upper"
              />
            </label>
            <label>
              <span>Lower</span>
              <Range
                min="2"
                max="8"
                step="0.1"
                defaultValue={lower}
                name="lower"
              />
            </label>
            <label>
              <span>Digital</span>
              <Range
                min="2"
                max="8"
                step="0.1"
                defaultValue={digital}
                name="digital"
              />
            </label>
            <Checkbox
              checked
              filledIn
              id="checkbox_1"
              label="Battery Chk"
              value={batCheck}
              name="batChk"
            />
            <div className="py-20">
              <RadioGroup
                name="AU"
                onChange={this.onAUChange}
                options={[
                  {
                    label: 'A',
                    value: 'A'
                  },
                  {
                    label: 'U',
                    value: 'U'
                  }
                ]}
                value={this.state.au}
                withGap
              />
            </div>
            <div className="center">
              <Button
                className="blue"
                type="submit"
                node="button"
                waves="light"
              >Save</Button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  serialNo: state.regentChart.serialNo,
  showSuccessMessage: state.regentChart.showSuccessMessage
});

const mapDispatchToProps = dispatch => ({
  updateRegantChartDetails: (regantChart) => dispatch(updateRegantChartDetails(regantChart)),
  resetSuccessMessage: () => dispatch(resetSuccessMessage())
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditRegentReport));

import React, { Component } from 'react';
import { Range, Icon, Checkbox, RadioGroup, Button } from 'react-materialize';
import { updateRegantChartDetails } from "../../actions/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class EditRegentReport extends Component {
  state = {
    showSuccess: false,
    chart:this.props.chart,
    upper:this.props.upper,
    lower:this.props.lower,
    digital:this.props.digital,
    batCheck:this.props.batCheck,
    au:this.props.au,
    userId:'kt1'
  }
  
  showSuccessMessage = () => {
    this.setState({ showSuccess: true });
    
    const regantChart = {
      name: this.props.name,
      serialNo: this.props.serialNo,
      range: this.props.range,
      month: this.props.month,
      year: this.props.year,
      day: this.props.day,
      chart: this.state.chart,
      upper: this.state.upper,
      lower: this.state.lower,
      digital: this.state.digital,
      au: this.state.au,
      batCheck: this.state.batCheck,
      userId: this.state.userId
    };
    this.props.updateRegantChartDetails(regantChart);
    this.props.hideEditDialogue();
    this.props.refereshData();
  }
  
  render() {
    const chartValueChange= event =>  {
      this.setState({ chart: event.target.value });
    }
    const upperValueChange= event =>  {
      this.setState({ upper: event.target.value });
    }
    const lowerValueChange= event =>  {
      this.setState({ lower: event.target.value });
    }
    const digitalValueChange= event =>  {
      this.setState({ digital: event.target.value });
    }
    return (
      <div className="flex d-col edit-regent-report">
        <div onClick={this.props.hideEditDialogue} className="flex d-row w-100 j-c-end">
          <Icon>close</Icon>
        </div>
        <div className="title">Edit Regent Report</div>
        <label>
          <span>Chart</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue={this.state.chart}
            onChange={chartValueChange}
            name="chart"
            valueLabelDisplay="on"
          />
        </label>
        <label>
          <span>Upper</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue={this.state.upper}
            onChange={upperValueChange}
            name="lower"
            valueLabelDisplay="on"
          />
        </label>
        <label>
          <span>Lower</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue={this.state.lower}            
            valueLabelDisplay="on"
            onChange={lowerValueChange}
            name="points"
          />
        </label>
        <label>
          <span>Digital</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue={this.state.digital}
            onChange={digitalValueChange}
            name="digital"
            valueLabelDisplay="on"
          />
        </label>
        <Checkbox
          checked
          filledIn
          id="checkbox_1"
          label="Bal Chk"
          value="bal-chk"
        />
        <div>
          <RadioGroup
            label="T-Shirt Size"
            name="size"
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
            value="A"
            withGap
          />
        </div>
        <div className="center">
          <Button
            className="blue"
            onClick={this.showSuccessMessage}
            node="button"
            waves="light"
          >Save</Button>
        </div>
      </div>
    )
  }
}

EditRegentReport.propTypes = {
  updateRegantChartDetails: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateRegantChartDetails }
)(withRouter(EditRegentReport));

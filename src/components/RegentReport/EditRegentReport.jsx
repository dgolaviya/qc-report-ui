import React, { Component } from 'react';
import { Range, Icon, Checkbox, RadioGroup, Button } from 'react-materialize';

export class EditRegentReport extends Component {
  state = {
    showSuccess: false
  }
  showSuccessMessage = () => {
    this.setState({ showSuccess: true });
  }
  render() {
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
            defaultValue="5"
            name="points"
          />
        </label>
        <label>
          <span>Upper</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue="5"
            name="points"
          />
        </label>
        <label>
          <span>Lower</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue="5"
            name="points"
          />
        </label>
        <label>
          <span>Digital</span>
          <Range
            min="2"
            max="8"
            step="0.1"
            defaultValue="5"
            name="points"
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

export default EditRegentReport;

import React, { Component } from 'react';
import { Range, Icon, Checkbox, RadioGroup, Button } from 'react-materialize';

export class EditRegentReport extends Component {
  render() {
    return (
      <div className="flex d-col edit-regent-report">
        <div className="flex d-row w-100 j-c-end">
          <Icon>close</Icon>
        </div>
        <div className="title">Edit Regent Report</div>
        <label>
          <span>Chart</span>
          <Range
            max="100"
            min="0"
            name="points"
          />
        </label>
        <label>
          <span>Upper</span>
          <Range
            max="100"
            min="0"
            name="points"
          />
        </label>
        <label>
          <span>Lower</span>
          <Range
            max="100"
            min="0"
            name="points"
          />
        </label>
        <label>
          <span>Digital</span>
          <Range
            max="100"
            min="0"
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
            // icon={<Icon>save</Icon>}
            // label="Save"
            node="button"
            waves="light"
          >Save</Button>
        </div>
      </div>
    )
  }
}

export default EditRegentReport;

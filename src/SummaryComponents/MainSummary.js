import React, { Component } from 'react'
import SummaryOption from './SummaryOption';

export default class MainSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      total: this.props.total
    }
  }
  render() {
    return (
      <div className="main__summary">
        <h2>Your cart</h2>
        {
          Object.entries(this.state.selected).map((feature, idx) => {
            // console.log(feature[1])
            return <SummaryOption
              key={idx}
              index={idx}
              label={feature[0]}
              value={feature[1].name}
              cost={feature[1].cost}
              className="summary__option"
            />
          })
        }
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.total}
          </div>
        </div>
      </div>
    )
  }
}
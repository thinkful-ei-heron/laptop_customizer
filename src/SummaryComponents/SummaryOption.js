import React, { Component } from 'react'

export default class SummaryOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      key: this.props.index,
      label: this.props.label,
      value: this.props.value,
      cost: this.props.cost
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div className="summary__option" key={this.state.index}>
        <div className="summary__option__label">{this.state.feature} </div>
        <div className="summary__option__value">{this.state.value}</div>
        <div className="summary__option__cost">
          {this.state.cost}
        </div>
      </div>
    );
  }
}



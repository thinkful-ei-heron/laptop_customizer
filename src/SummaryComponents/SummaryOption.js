import React, { Component } from 'react';

import { USCurrencyFormat } from '../App';

export default class SummaryOption extends Component {
  render() {
    return (
      <div className='summary__option' key={this.props.index}>
        <div className='summary__option__label'>{this.props.feature} </div>
        <div className='summary__option__value'>{this.props.value}</div>
        <div className='summary__option__cost'>
          {USCurrencyFormat.format(this.props.cost)}
        </div>
      </div>
    );
  }
}

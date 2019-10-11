import React, { Component } from 'react'

import SummaryOption from './SummaryOption';
import { USCurrencyFormat } from '../App'

export default class MainSummary extends Component {

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {
          Object.entries(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return <SummaryOption
              key={featureHash}
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
            {USCurrencyFormat.format(this.props.total)}
          </div>
        </div>
      </section>
    )
  }
}
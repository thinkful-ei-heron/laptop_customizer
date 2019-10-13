import React, { Component } from 'react';

import SummaryOption from './SummaryOption';
import Total from './Total';

export default class MainSummary extends Component {
  render() {
    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {Object.entries(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          return (
            <SummaryOption
              key={featureHash}
              index={idx}
              label={feature[0]}
              value={feature[1].name}
              cost={feature[1].cost}
              className='summary__option'
            />
          );
        })}
        <Total total={this.props.total} />
      </section>
    );
  }
}

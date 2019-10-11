import React, { Component } from 'react'

import { USCurrencyFormat } from '../App'
// import { updateFeature } from '../App'
import slugify from 'slugify';

export default class FeatureOption extends Component {
  // handleChange = () => this.props.updateFeature(this.props.feature, this.props.FeatureItem)
  render() {
    return (
      <div key={this.props.itemHash}>
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item === this.props.selected[this.props.feature].name}
          onChange={() => { this.props.handleChange(this.props.feature, this.props.item) }}
        >
        </input>
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name}{USCurrencyFormat.format(this.props.item.cost)}
        </label>
      </div >
    )
  }
}

// checked = { item.name === this.state.selected[feature].name }
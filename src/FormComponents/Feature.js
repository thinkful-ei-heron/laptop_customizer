import React, { Component } from 'react'

export default class Feature extends Component {
  render() {
    return (
      <div className="feature__item">
        {/* <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({this.state.currencyFormat.format(item.cost)})
            </label> */}
      </div>
    );
  }
}
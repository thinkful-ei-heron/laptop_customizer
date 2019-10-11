import React, { Component } from 'react'

export default class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    }
  }
  render() {
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

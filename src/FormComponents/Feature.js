import React, { Component } from 'react'

import FeatureOption from './FeatureOption'
import slugify from 'slugify';

export default class Feature extends Component {
  render() {
    return (
      // loop through feature -> fieldsets
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name" >
          <h3>{this.props.feature}</h3>
        </legend>
        {
          this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <FeatureOption
                key={itemHash}
                id={itemHash}
                item={item}
                itemHash={itemHash}
                feature={this.props.feature}
                selected={this.props.selected}
                handleChange={this.props.handleChange}
              // FeatureName={this.props.featureName}
              // feature={this.props.feature}
              // selected={this.props.selected}
              />
            )
          })
        }
      </fieldset>
    )
  }
}

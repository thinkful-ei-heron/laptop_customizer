//Contains <Feature featureName="" featureOptions="" featureItems="" />

/* <h2>Customize your laptop</h2> */
/* FeatureOption Components */
/* FeatureItem Components */
import slugify from 'slugify';
import React, { Component } from 'react'
import Feature from './Feature';

export default class MainForm extends Component {

  //this.props contains ->
  // features
  // selected
  // currencyFormat
  // updateFeature

  render() {
    return (
      <form className='formContainer'>
        <h2>Customize your laptop</h2>
        {/* features.map -> <Feature /> */}
        {
          Object.entries(this.props.features).map((feature, idx) => {
            // Object.keys(this.props.features).map((feature, idx) => {
            //   const featureHash = feature + '-' + idx;
            //   this.props.features[feature].map(item => {
            // const itemHash = slugify(JSON.stringify(item));
            console.log('feature: ' + feature)
            console.log(feature[0]) // -> Processor / OS etc
            console.log(feature[1]) // -> Array [0: {17th Gen Intel}, 1: {Prof X AMD}]
            console.log(feature[1][0].name) // -> 17th Gen Intel
            // console.log('index: ' + idx)
            return (
              <Feature
                key='test itemhash'
                featureName='test featurename'
                item='test item'
              />
            )
          })
        }
      </form>
    );
  }
}

import React, { Component } from 'react'

import Feature from './Feature'
// import slugify from 'slugify';

export default class MainForm extends Component {

  // <MainForm
  //   features={this.state.features}
  //   selected={this.state.selected}
  //   currencyFormat={() => this.USCurrencyFormat()}
  //   updateFeature={() => this.updateFeature()}
  // />

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {
          Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            // let featureObj = this.props.features[feature]
            // let selected = this.props.selected
            // let updateFeature = this.props.updateFeature
            return <Feature
              key={featureHash}
              featureHash={featureHash}
              feature={feature}
              features={this.props.features}
              selected={this.props.selected}
              handleChange={this.props.handleChange}
            // feature={featureObj}
            // featureName={feature}
            // selected={selected}


            />
          })
        }
      </form>
    )
  }
}

// App -> MainForm(Component)
//        -> Feature 1
//            -> Option 1
//            -> Option 2
//        -> Feature 2
//            -> Option 1
//            -> Option 2
//        -> Feature 3
//            -> Option 1
//            -> Option 2
//        -> Feature 4
//            -> Option 1
//            -> Option 2


//   key={featureHash}
//   index={idx}
//   featureName={featureName}
//   items={items}
//   selected={selected}
//   updateFeature={updateFeature}
//   item={feature}
//   cost={feature[1][0].cost}
// />

// Object.keys(this.props.features).map((feature, idx) => {
//   const featureHash = feature + '-' + idx;
//   const options = this.props.features[feature].map(item => {
//     const itemHash = slugify(JSON.stringify(item));
//     <Feature 
//       key={itemhash}
//       itemHash={itemHash}
//       name={slugify(feature)}
//       item={item}
//       checked={item.name === this.props.selected[feature].name}
//       onChange={e => this.updateFeature(feature, item)}
//     />
//   });
// })

// Object.entries(this.props.features).map((feature, idx) => {
//   // Object.keys(this.props.features).map((feature, idx) => {
//   //   const featureHash = feature + '-' + idx;
//   //   this.props.features[feature].map(item => {
//   // const itemHash = slugify(JSON.stringify(item));
//   console.log('feature: ' + feature)
//   console.log(feature[0]) // -> Processor / OS etc
//   console.log(feature[1]) // -> Array [0: {17th Gen Intel}, 1: {Prof X AMD}]
//   console.log(feature[1][0].name) // -> 17th Gen Intel
//   // console.log('index: ' + idx)
//   const featureHash = feature + '-' + idx;
//   let featureName = feature[0]
//   let items = feature[1]
//   let selected = this.props.selected
//   let updateFeature = this.props.updateFeature
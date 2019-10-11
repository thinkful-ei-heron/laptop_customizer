//Contains <Feature featureName="" featureOptions="" featureItems="" />

/* <h2>Customize your laptop</h2> */
/* FeatureOption Components */
/* FeatureItem Components */
import slugify from 'slugify';
import React, { Component } from 'react'
import Feature from './Feature';

export default class MainForm extends Component {

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    let Features = this.props.features.map
    return (
      <form className="main__form" >
        <h2>Customize your laptop</h2>
        {Features}
      </form>
    )


  };
}



// const features = Object.keys(this.state.features).map((feature, idx) => {
//   const featureHash = feature + '-' + idx;
//   const options = this.state.features[feature].map(item => {
//     const itemHash = slugify(JSON.stringify(item));
//     return (
//       <div key={itemHash} className="feature__item">
//         <input
//           type="radio"
//           id={itemHash}
//           className="feature__option"
//           name={slugify(feature)}
//           checked={item.name === this.state.selected[feature].name}
//           onChange={e => this.updateFeature(feature, item)}
//         />
//         <label htmlFor={itemHash} className="feature__label">
//           {item.name} ({this.state.currencyFormat.format(item.cost)})
//             </label>
//       </div>
//     );
//   });

//   return (
//     <fieldset className="feature" key={featureHash}>
//       <legend className="feature__name">
//         <h3>{feature}</h3>
//       </legend>
//       {options}
//     </fieldset>
//   );
// });
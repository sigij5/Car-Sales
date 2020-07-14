import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/featureActions'

const AdditionalFeature = props => {
  const {feature, addFeature} = props

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(feature)}>Add</button>
      {feature.name} (+{feature.price})
      {console.log(feature)}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  };
}

export default connect(
  mapStateToProps,
  {addFeature}
)(AdditionalFeature);

// export default AdditionalFeature;

import React from 'react';
import {removeFeature} from '../actions/featureActions'
import { connect } from 'react-redux';

const AddedFeature = props => {
  const {feature, removeFeature} = props

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(feature)}>X</button>
      {props.feature.name}
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
  {removeFeature}
)(AddedFeature);

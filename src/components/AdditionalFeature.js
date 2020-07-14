import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  const {dispatch} = props

  const addFeature = e => {
    // e.preventDefault();
    dispatch({ type: 'ADD_FEATURE', payload: { name: props.feature.name, price: props.feature.price }});
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: { name: state.car.name, price: state.car.price}
  };
}

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);

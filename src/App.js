import React, { useReducer } from 'react';
import { connect } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { carReducer, initialState } from './reducers/carReducer'


const App = () => {

  const [state, dispatch] = useReducer(carReducer, initialState)

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures dispatch={dispatch}/>
        <Total />
      </div>
    </div>
  );
};

export default App;

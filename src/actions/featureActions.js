

export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = newFeature => {
    console.log(newFeature)
    return { type: ADD_FEATURE, payload: newFeature};
  };



export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = removeFeature => {
    return { type: REMOVE_FEATURE, payload: removeFeature };
};
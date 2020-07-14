import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions'


export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]


}


export const carReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_FEATURE:
            const newFeature = action.payload
            console.log(newFeature)
            console.log(state)
            const filteredArray = state.additionalFeatures.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                additionalPrice: state.additionalPrice + newFeature.price,
                additionalFeatures: filteredArray,
                car: {
                    ...state.car,
                    features: [...state.car.features, newFeature],
                }
            };
        case 'REMOVE_FEATURE':
            const filteredFeatures = state.car.features.filter(item => item.id !== action.payload.id)
            const removePrice = action.payload.price
            return {
                ...state,
                additionalPrice: state.additionalPrice - removePrice,
                car: {
                    ...state.car,
                    features: filteredFeatures
                }
            };
            default:
                return state;
    }
}
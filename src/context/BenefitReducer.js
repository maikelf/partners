import { GET_BENEFIT } from './types';

export const BenefitReducer = (state, action) => {
    const  {payload, type} = action;

    switch (type) {
        case GET_BENEFIT:
            return {
                ...state,
                benefit: payload
            }
        default:
            return state;
    }
}
import React, { useReducer } from "react";
import { BenefitReducer } from './BenefitReducer';
import BenefitContext from "./BenefitContext";
import { PropaneSharp } from "@mui/icons-material";

const BenefitState = (props) => {
    const initialState = {
        benefit: [],
        selectedBenefit: null
    }

    const [state, dispatch] = useReducer(BenefitReducer, initialState);
    
    const getBenefit = async () => {
        return fetch('./data.json')
            .then(data => data.json())
            .then(rows => dispatch({
                type: 'GET_BENEFIT',
                payload: rows
            }))
            .catch(err => console.log('error reading json', err))
    }
    
    return (
        <BenefitContext.Provider value={{
            benefit: state.benefit,
            selectedBenefit: state.selectedBenefit,
            getBenefit
        }}>
            {PropaneSharp.children}
        </BenefitContext.Provider>
    )
}

export default BenefitState; 
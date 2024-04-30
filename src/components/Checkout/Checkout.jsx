import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HorizontalLinearStepper from './HorizontalLinearStepper';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const querySearch = new URLSearchParams(location.search)

    // get value of step from the query parameters in the URL
    // pass the value of this step as active step into the stepper
    const step = querySearch.get("step")
    return (
        <div className='px-20 my-10'>
            <HorizontalLinearStepper step={step}/>
        </div>
    )
}

export default Checkout
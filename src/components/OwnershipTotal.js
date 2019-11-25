import React from 'react';
import styled from 'styled-components'
import SliderLabel from './SliderLabel';
import getDisplayAmount from '../utils/numberFormat'
const OwnershipTotalAmount = styled.p`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: #916bff;
`;

const OwnershipText = styled.p`
    text-align: center;
    font-weight:300;

`;
const OwnershipTotal = ({sliders}) => {
    const {initial, monthly, years} = sliders;
    const r = 0.05; // assume interest rate of 5% annually
    const n = 12;   // assume interest compounded monthly
    const total = initial*Math.pow((1+(r/n)),(n*years)) + monthly * ((Math.pow((1+r/n),(n*years))-1)/(r/n))*(1+(r/n))
    const displayTotal = getDisplayAmount(total);
    return (
        <div style={{marginLeft:'20px'}}>
            <SliderLabel labelText='Ownership Value' value={total}>{`$ ${Number(parseInt(total)).toLocaleString('en')}`}</SliderLabel>
            <OwnershipTotalAmount className='ownership-total-amount'>{displayTotal}</OwnershipTotalAmount>
            <OwnershipText className='ownership-text'>Use your <span>{displayTotal}</span> ownership stake as a down payment on any home, transfer it to your next Homevest Rental, or cash out.</OwnershipText>
        </div>
    );
};

export default OwnershipTotal;
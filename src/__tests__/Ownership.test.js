import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import Ownership from '../components/Ownership'

it('shows formatted rent + $ 0 as original monthly payment', ()=>{
    const rent = 1000;
    const {queryByTestId} = render(<Ownership rent={rent}></Ownership>);
    const monthlyPayment = queryByTestId('monthly-payment');
    expect(monthlyPayment).toBeInTheDocument();
    expect(monthlyPayment).toHaveTextContent('$ 1,000 rent + $ 0 investment');
})
it('updates monthly payment when monthly slider is changed', async ()=>{
    const rent = 1000;
    const {queryByLabelText, queryByTestId} = render(<Ownership rent={rent}></Ownership>);
    const monthlySlider = queryByLabelText(/Monthly Investment/i);
    const monthlyPayment = queryByTestId('monthly-payment');
    expect(monthlySlider).toBeInTheDocument();
    fireEvent.change(monthlySlider, {target: { value: 10 } });
    // wait needed since onChange is debounced
    await wait(() => {
        expect(monthlySlider.value).toBe("10");
        expect(monthlyPayment).toHaveTextContent('$ 1,000 rent + $ 10 investment');
    }, 0);
})
import React from 'react'
import {render} from '@testing-library/react'
import SliderLabel from '../components/SliderLabel'

it('shows labelText', ()=>{
    const labelText = 'test';
    const {queryByLabelText} = render(<SliderLabel labelText={labelText}/>)

    expect(queryByLabelText('test')).toBeInTheDocument();
});
it('shows strikeThroughText', ()=>{
    const labelText = 'test strike';
    const {queryByText} = render(<SliderLabel strikeThroughText={labelText}/>)

    const strikeThrough = queryByText('test strike');
    expect(strikeThrough).toBeDefined();
    expect(strikeThrough).toHaveStyle('text-decoration: line-through');
});
it('shows bullet', ()=>{
    const labelText = 'test';
    const {queryByTestId} = render(<SliderLabel labelText={labelText}/>)

    const bullet = queryByTestId('bullet');
    expect(bullet).toBeInTheDocument();
});
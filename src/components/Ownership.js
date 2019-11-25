import React, {useState} from 'react';
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import Slider from './Slider'
import SliderLabel from './SliderLabel'
import OwnershipTotal from './OwnershipTotal'
import getDisplayAmount from '../utils/numberFormat'

const MonthlyPayment = styled.div`
box-sizing:border-box;
border:1px solid #F4F4F4;
border-radius:8px;
width:100%;
padding-top:20px;
padding-left:20px;
margin-bottom:20px;
`;

const OwnershipStyle= styled.div`
font-size:12px;
    border:1px solid #F4F4F4;
    border-radius:8px;
    margin-top:20px;
    width:80%;
    margin-left:20px;
    p.monthly-payment{
        font-weight: 600;
    font-size: 1.2rem;
    margin-top:0;
    text-align:left;
    }
`;


const Ownership = ({rent}) => {
    const staticSliders = [
        {
            name:'initial',
            title:'Initial Investment',
            strikeThroughText: 'Security Deposit',
            min: parseInt(rent)*2,
            max: parseInt(rent)*12,
            step: 25,
            unit:'currency'
        },
        {
            name:'monthly',
            title:'Monthly Investment',
            min:0,
            max:500,
            step:5,
            unit:'currency'
        },
        {
            name:'years',
            title:'Years with Homevest',
            min:1,
            max:10,
            step:1,
            unit:'year'
        }
    ]
    const [sliders, setSliders] = useState({
        initial:staticSliders[0].min,
        monthly:0,
        years:1
    });

    const handleSliderChange = (name,value) =>{
        setSliders({...sliders,[name]:value});
    }

    return (
        <OwnershipStyle>
            {/* Monthtly Payment */}
            <MonthlyPayment>
                <SliderLabel labelText='Monthly Payment'></SliderLabel>
                <p data-testid='monthly-payment' className='monthly-payment'><span>{`${getDisplayAmount(rent)} rent + `}</span><span style={{color:'#916bff'}}>{`${getDisplayAmount(sliders.monthly)} investment`}</span></p>
            </MonthlyPayment>



            {/* Sliders */}
            {staticSliders && staticSliders.map((slider,index)=>{
             return   <Slider key={`${slider.name}-${index}`} title={slider.title} value={sliders && sliders[slider.name]} unit={slider.unit} strikeThroughText={slider.strikeThroughText} name={slider.name} min={slider.min} max={slider.max} step={slider.step}  handleSliderChange={debounce(handleSliderChange,4)} />
            }
            )}
            {/* Total */}
            <OwnershipTotal sliders={sliders}/>
        </OwnershipStyle>
    );
};

export default Ownership;
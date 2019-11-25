import React, {useState} from 'react';
import styled from 'styled-components'
import SliderLabel from './SliderLabel';
import getDisplayAmount from '../utils/numberFormat'
const SliderContainer = styled.div`
  border-left:1px solid #DEE2E6;
  padding-left: 10px;
  margin-left:5px;
`;

const SliderInput = styled.input.attrs(props=>({
  style:{
    background: `linear-gradient(to right, #916BFF 0%, #916BFF ${props.fillPercent}%, #d3d3d3 ${props.fillPercent}%, #d3d3d3 100%)`,
  },
}))`
margin-bottom:20px;
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  outline: none;
  cursor: ${props=>props.grabbing ? 'grabbing' : 'grab'};


&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance:none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: ${props=>props.grabbing ? 'grabbing' : 'grab'};
  border: 0.3px solid black;
}
&::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: ${props=>props.grabbing ? 'grabbing' : 'grab'};
  outline: black;
}

&::-ms-thumb {
    background: #fff;
    border: 1.5px solid black;
    height: 25px;
    width: 25px;
    box-sizing: border-box;
}
`;

const AmountStyle = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top:0;
`;

const Slider = ({name, title, value, handleSliderChange, unit='currency', min=0, max=100, step=1, strikeThroughText=''}) => {
  // used for changing cursor type
  const [grabbing, setGrabbing] = useState(false);

    if(!value){ // initialize value to be minimum if no value passed
        value=min;
    }

    // calculate percent of bar filled for slider
    const fillPercent = (value-min)/(max-min) *100;



    return (
      <>
        <div style={{marginLeft:'20px'}} className='slider-section' onMouseDown={()=>setGrabbing(true)} onMouseUp={()=>setGrabbing(false)}>
            <SliderLabel labelText={title} strikeThroughText={strikeThroughText} value={value} unit={unit} forInput={name} ></SliderLabel>
            <SliderContainer>
              <AmountStyle className='slider-amount'>{getDisplayAmount(value, unit)}</AmountStyle>
              <SliderInput tabIndex='0' className='slider-input' id={name} fillPercent={fillPercent}  grabbing={grabbing} title={title} aria-label={`${title} slider`} name={name} type='range' min={min} max={max} step={step} value={value} onChange={(e)=>{
                const {name, value} = e.currentTarget;
                handleSliderChange(name, value);
              }} />
            </SliderContainer>
        </div>
</>
    );
};

export default Slider;
import React from 'react';
import styled from 'styled-components'
import BulletStyle from './styles/BulletStyle'
import LabelStyle from './styles/LabelStyle'

const LabelContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items: center;
`;


const SliderLabel = ({labelText, forInput='', strikeThroughText=''}) => {

    return (
            <LabelContainer className='label'>
                <BulletStyle className='label-bullet' data-testid='bullet'></BulletStyle>
                <LabelStyle className='label-text' htmlFor={forInput}>
                    {strikeThroughText && (<><span className='strikethrough'>{strikeThroughText}</span><span> → </span></>)}<span>{labelText}</span></LabelStyle>
            </LabelContainer>

    );
};

export default SliderLabel;
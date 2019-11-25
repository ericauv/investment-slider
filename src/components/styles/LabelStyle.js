import styled from 'styled-components'

const LabelStyle = styled.label`
    margin-left: 15px;
    text-transform: uppercase;

    & > .strikethrough{
        text-decoration: line-through;
    }
`;
export default LabelStyle;
import styled from 'styled-components';

export const ColorStyles = styled.p`
     border-radius: 50%;
     width: 40px;
     height: 40px;
     margin: 10px;
     background: ${props => props.bg ? props.bg : "#9848FF" };  
`



import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ColorStyles = styled.p`
     border-radius: 50%;
     width: 40px;
     height: 40px;
     margin: 10px;
     background: ${props => props.bg ? props.bg : "#9848FF" };
    
`
// export const OldColorBoxes = styled.div`
//      border-radius: 16px;
//      padding: 16px;
//      width: 227px;
//      background: ${props => props.bg ? props.bg : "#9848FF" };
//      color: white;
// `

export const ColorBoxes = styled( Card )`
     border-radius: 16px;
     padding: 16px;
     width: 227px;
     background: ${props => props.bg ? props.bg : "#9848FF" };
     color: white;
     margin: 8px;
     
     


`
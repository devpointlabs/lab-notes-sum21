import styled from "styled-components";
import { Card } from "react-bootstrap";

// export const CardColors = [

//  { key: "p", text: "purple", value: "#9848FF" },
//  { key: "g", text: "green", value: "#407D60" },
//  { key: "o", text: "orange", value: "#D66E33" },
//  { key: "a", text: "aqua", value: "#44BCE0" },
//  { key: "n", text: "bluepurple", value: "#42487E" }
// ];

export const ColorStyles = styled.p`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px;
  background: ${(props) => (props.bg ? props.bg : "#9848FF")};
`;
// export const OldColorBoxes = styled.div`
//      border-radius: 16px;
//      padding: 16px;
//      width: 227px;
//      background: ${props => props.bg ? props.bg : "#9848FF" };
//      color: white;
// `

export const ColorBoxes = styled(Card)`
     border-radius: 16px;
     padding: 16px;
     width: 275px;
     height: 163px;
     background: ${(props) =>
       props.bg ? props.bg: "#9848FF"};
     color: white;
     margin: 8px;
     
     
     
     


`;

// , linear-gradient(to right, rgba(152, 72, 255, 100),rgba(152, 72, 255, 73)
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

// export const CardColors = [

//  { key: "p", text: "purple", value: "#9848FF" },
//  { key: "g", text: "green", value: "#407D60" },
//  { key: "o", text: "orange", value: "#D66E33" },
//  { key: "a", text: "aqua", value: "#44BCE0" },
//  { key: "n", text: "bluepurple", value: "#42487E" }
// ];

export const ColorStyles = styled.div`
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
     padding: 0px;
     max-width: 275px;
     height: 163px;
     background: ${(props) =>
       props.bg ? props.bg: "#9848FF"};
     color: white;
     margin: 3px;
   
    


     
`;

export const CardPageGrid = styled.div`
  // grid-template-columns: repeat(10, 1fr);
  // grid-template-rows: repeat(5, 1fr);
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 0px;



`;

// export const InnerCardGrid = styled.div`
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(3, 1fr);

// `;
export const SettingsCardContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: row;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
`;

export const QuoteContainer = styled.p`
   
    // grid-area: 2 / 8 / 4 / 10;
    // width: 20%;
    // background: rgba(152, 71, 255, 0.06);
    // color: black;
    // font-size: 36px;
    // text-align: left;
    padding: 0 16px;
    margin-left: 16px;
`

export const ListContainer = styled.div`
// flexgrow, flexshrink, flexbasis = grow, shrink, take up whatever remaining space left
      flex: 1 1 100%;
      

`
export const QuoteCard = styled(Card)`
   
    // grid-area: 2 / 8 / 4 / 10;
    width: 250px;
    background: rgba(152, 71, 255, 0.06);
    color: black;
    font-size: 36px;
    text-align: left;
    // padding: 0 16px;
    // margin-left: 16px;
    `

// export const bookformButton = styled(Button)`
//       border-radius: 25px;
//       color: white;
//       background: rgba(152, 72, 255, 100);
//       justify-content: right;
//       margin: 30px;

// `

// export const navbarStyles = styled.div`
    

// `



// , linear-gradient(to right, rgba(152, 72, 255, 100),rgba(152, 72, 255, 73)
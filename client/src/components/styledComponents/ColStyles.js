import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ColColor = styled.div`
  background-color: ${(props) => (props.color ? props.color : "#ebe5f5")};
`;

export const OptButton = styled.button`
  float: right;
  background-color: ${(props) => (props.color ? props.color : "#ebe5f5")};
  border: none;
  display: inline-block;
  text-align: left;
  $enable-caret: false;
  .dropdown-toggle:after {
    display: none;
  }
`;

export const ColWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction:column;
  .item {
    height: 2rem;
    // margin-bottom: 2%; /* (100-32*3)/2 */
    margin: 0.5rem;
  };
  .row-max {
    justify-content: space-between;
    flex: 0 0 33%;
  }
`



export const NewCol = styled.div`
    background-color: rgba(152, 71, 255, 0.06); 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    // display: flex;
    font-size: 16px;
    
  }
`;
export const CardPageGrid = styled.div`
  // grid-template-columns: repeat(10, 1fr);
  // grid-template-rows: repeat(5, 1fr);
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 0px;
`;

export const NewColumnContainer = styled.p`
  padding: 0 16px;
  margin-right: 16px;
`;

export const NewColumnButton = styled(Button)`
  max-width: 200px;
  flex-flow: no wrap row;
  background: rgba(152, 71, 255, 0.06);
  border: transparent;
  color: black;
  font-size: 15px;
  text-align: center;
  position: absolute;
  margin-right: 16px;
  
// can't get this work
  // &:hover 
  //   position: fixed;
  //   // transform: translate(0%, 30%);
  //   // transition: 0.3s ease-out;
  //   background: rgba(152, 71, 255, 0.06) !important;
    
    
  
  
`
 


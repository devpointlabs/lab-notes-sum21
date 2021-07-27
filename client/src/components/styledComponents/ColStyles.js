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
  .item {
    height: 100px;
    margin-bottom: 2%; /* (100-32*3)/2 */
  };
  .row-max {
    justify-content: space-between;
    flex: 0 0 33%;
  }
`

export const NewCol = styled.div`
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
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

export const NewColumnCard = styled(Button)`
  width: 150px;
  background: rgba(152, 71, 255, 0.06);
  color: black;
  font-size: 20px;
  text-align: center;
  // padding: 0 16px;
  // margin-left: 16px;
`;

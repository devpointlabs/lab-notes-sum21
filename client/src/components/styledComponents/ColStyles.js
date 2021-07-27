import styled from "styled-components";

export const ColColor = styled.div`
  background-color: ${props => props.color ? props.color : "#ebe5f5"};
`

export const OptButton = styled.button`
  float: right;
  background-color: ${props => props.color ? props.color : "#ebe5f5"};
  border: none;
  display: inline-block;
  text-align: left;
  $enable-caret: false;
  .dropdown-toggle:after {
    display:none;
  }
`

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
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`
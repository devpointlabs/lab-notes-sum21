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
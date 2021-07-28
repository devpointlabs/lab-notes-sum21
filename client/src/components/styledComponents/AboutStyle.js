import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 5px 5px;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 5px 5px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    flex-grow: 3;
    /* background: red; */
    .card {
      justify-content: space-between;
      width: 33%;
    }
`;
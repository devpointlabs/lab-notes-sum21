import styled from 'styled-components';
   
export const Box = styled.div`
  // padding: 5px 5px;
  // background: white;
  // position: absolute;
  // bottom: 0;
  // width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 5px 5px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const MainFooter = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`
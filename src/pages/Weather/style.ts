import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  @media (min-width: 731px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const Wheather = styled.div`
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4286f4, #373b44);
  background: linear-gradient(to right, #4286f4, #373b44);
  border-radius: 20px;
  padding: 40px;
  margin-top: 20px;

  @media (min-width: 731px) {
    width: 360px;
  }
`;

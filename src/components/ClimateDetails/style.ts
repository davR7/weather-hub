import styled from 'styled-components';

export const ClimateDetails = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 501px) {
    justify-content: center;
  }
`;

export const Condition = styled.div`
  display: flex;

  @media (min-width: 501px) {
    margin: 0 20px;
  }
`;

export const Img = styled.img`
  width: 24px;
  margin-right: 10px;
`;

export const Wrap = styled.div`
  color: #fff;
`;

export const Value = styled.div``;

export const Label = styled.label`
  font-size: 0.8rem;
`;

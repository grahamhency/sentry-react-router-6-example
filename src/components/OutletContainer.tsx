import styled from '@emotion/styled';

export const OutletContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 1.25rem;
  margin: 1.25rem 0;

  &:empty {
    display: none;
  }
`;

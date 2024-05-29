import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 264px;

  padding: 12px;
  border: 1px solid #cfcfe4;
  border-radius: 18px;
`;

export const Text = styled.div<{ active: boolean }>`
  font-size: 18px;
  line-height: 18px;
  font-weight: 800;
  color: #39414b;
  padding: 12px;
  border-radius: 12px;

  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: #ffffff;
      background: #5fbf77;
    `};
`;

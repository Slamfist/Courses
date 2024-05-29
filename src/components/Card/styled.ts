import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 18px;
  box-shadow: 0 10px 13px -4px rgba(35, 35, 95, 0.19);
`;

export const Image = styled.div<{ img: string; bgColor: string }>`
  width: 100%;
  height: 162px;
  border-radius: 18px 18px 0 0;

  ${({ img, bgColor }) => css`
    background: url(${img}) ${bgColor} center/contain no-repeat;
  `};
`;

export const Name = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 800;
  padding: 12px 18px 18px 18px;
`;

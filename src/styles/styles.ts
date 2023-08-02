import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const indexStyle = css`
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    padding: 0px 24px;
  }
`;

export const paginationStyle = css`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: 500;
  margin: 16px 0 12px;
  color: ${colors.grey900};
`;

export const listStyle = css`
  padding: 24px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 54px;

  @media (max-width: 1280px) {
    padding: 0px 24px;
  }

  @media (max-width: 1280px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

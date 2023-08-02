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

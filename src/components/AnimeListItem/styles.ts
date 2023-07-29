import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const listItemStyles = css`
  display: grid;
  cursor: pointer;
`;

export const posterStyles = css`
  border-radius: 8px;
`;

export const titleStyles = css`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey500};
  transition: all 0.2s ease-in-out;
`;

export const listItemHoveredTitleStyles = css`
  ${listItemStyles}:hover h2 {
    color: ${colors.grey900};
  }
`;

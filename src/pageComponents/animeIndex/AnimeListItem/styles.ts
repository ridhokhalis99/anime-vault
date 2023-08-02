import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const listItemStyle = css`
  display: grid;
  cursor: pointer;
  position: relative;

  :hover h2 {
    color: ${colors.grey900};
  }
`;

export const addStashStyle = css`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 5;
`;

export const posterStyle = css`
  border-radius: 8px;
`;

export const titleStyle = css`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey500};
  text-decoration: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.2s ease-in-out;
`;

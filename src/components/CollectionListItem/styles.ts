import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const stackedCardsStyle = css`
  position: relative;
  border-radius: 0.25rem;
  cursor: pointer;

  :hover h2 {
    color: ${colors.grey900};
  }
`;

export const emptyCardStyle = css`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 300px;
  width: 200px;
  z-index: 1;
  border-radius: 8px;
  border: 1px solid ${colors.grey200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const emptyTextStyle = css`
  text-align: center;
  color: ${colors.grey500};
`;

export const cardImageStyle = css`
  position: absolute;
  height: 300px;
  width: 200px;
  z-index: 1;
  border-radius: 8px;
`;

export const titleStyle = css`
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

export const bottomCardContainerStyle = css`
  margin-top: 316px;
  display: flex;
  justify-content: space-between;
`;

export const trashIconStyle = css`
  cursor: pointer;
  color: ${colors.grey500};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.grey900};
  }
`;

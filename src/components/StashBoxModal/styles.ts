import colors from "@/styles/colors";
import { css } from "@emotion/react";

export const titleContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const titleStyle = css`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.grey900};
`;

export const listContainerStyle = css`
  margin-top: 4px;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${colors.grey400} ${colors.grey100};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey400};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.grey500};
  }
`;

export const rowStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 6px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const titleAnimeStyle = css`
  font-size: 16px;
  color: ${colors.grey500};
  cursor: default;
`;

export const trashIconStyle = css`
  cursor: pointer;
  color: ${colors.grey500};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.grey900};
  }
`;

export const buttonStyles = css`
  width: 100%;
  margin-top: 12px;
`;

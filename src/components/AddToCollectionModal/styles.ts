import { css } from "@emotion/react";
import colors from "@/styles/colors";

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

export const emptyCollectionContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const emptycollectionTextStyle = css`
  font-size: 14px;
  color: ${colors.grey600};
  margin-bottom: 8px;
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

export const newCollectionButtonStyle = css`
  margin-bottom: 12px;
`;

import { css } from "@emotion/react";

export const createCollectionContainerStyle = css`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const collectionInputStyle = css`
  width: 100%;
`;

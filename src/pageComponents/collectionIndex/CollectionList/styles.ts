import { css } from "@emotion/react";

export const collectionListStyle = css`
  padding: 24px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 54px;

  @media (max-width: 1280px) {
    padding: 24px 24px 0px;
  }

  @media (max-width: 1280px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

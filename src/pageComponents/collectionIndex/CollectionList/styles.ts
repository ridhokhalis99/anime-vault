import { css } from "@emotion/react";
import { listStyle } from "@/styles/styles";

export const collectionListStyle = css`
  ${listStyle}
  @media (max-width: 1280px) {
    padding: 24px 24px 0px !important;
  }
`;

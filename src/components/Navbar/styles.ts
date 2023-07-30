import colors from "@/styles/colors";
import { css } from "@emotion/react";

export const navbarContainerStyles = css`
  height: 68px;
  background-color: ${colors.primary900};
  position: sticky;
  z-index: 100;
`;

export const navLinksContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;

export const logoLinkStyles = css`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

import colors from "@/styles/colors";
import { css } from "@emotion/react";

export const navbarContainerStyle = css`
  height: 68px;
  background-color: ${colors.primary900};
  position: sticky;
  z-index: 100;
`;

export const navLinksContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    padding: 0px 24px;
  }
`;

export const logoLinkStyle = css`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const collectionButtonStyle = css`
  @media (max-width: 768px) {
    .mantine-Button-label {
      display: none;
    }

    .mantine-Button-root {
      width: 40px;
      height: 40px;
    }

    .mantine-Button-leftIcon {
      margin-right: 0px;
    }
  }
`;

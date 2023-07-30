import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const bannerContainerStyles = css`
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  z-index: 1;
`;

export const bannerOverlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const imageButtonContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 12px;
`;

export const imageStyles = css`
  border-radius: 8px;
`;

export const buttonStyles = css`
  width: 100%;
`;

export const detailContainerStyles = css`
  margin: 0 auto;
  max-width: 1366px;
  position: relative;
`;

export const headerContainerStyles = css`
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 2;
  display: flex;
`;

export const textContainerStyles = css`
  margin-top: 124px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const titleStyles = css`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.grey900};
`;

export const descriptionStyles = css`
  font-size: 16px;
  color: ${colors.grey500};
  max-width: 1000px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const badgeContainerStyles = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const tagTextStyles = css`
  font-size: 16px;
  color: ${colors.grey500};
  margin-top: 8px;
  margin-bottom: 8px;
`;

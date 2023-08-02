import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const bannerContainerStyle = css`
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  z-index: 1;
`;

export const bannerOverlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const imageButtonContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 12px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const imageStyle = css`
  border-radius: 8px;
`;

export const buttonStyle = css`
  width: 100%;
`;

export const detailContainerStyle = css`
  position: relative;
  margin: 0 auto;
  max-width: 1366px;
`;

export const headerContainerStyle = css`
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 2;
  display: flex;

  @media (max-width: 1366px) {
    padding: 0px 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    top: -240px;
  }
`;

export const textContainerStyle = css`
  margin-top: 124px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    margin-top: 24px;
    margin-left: 0px;
    text-align: center;
  }
`;

export const titleStyle = css`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.grey900};
`;

export const descriptionStyle = css`
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

export const badgeContainerStyle = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const tagTextStyle = css`
  font-size: 16px;
  color: ${colors.grey500};
  margin-top: 8px;
  margin-bottom: 8px;
`;

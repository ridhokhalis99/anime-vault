import { css } from "@emotion/react";
import colors from "@/styles/colors";

export const actionIconStyle = css`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const notificationStyle = css`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${colors.secondary900};
  padding: 5px 8px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const textStyle = css`
  font-size: 14px;
`;

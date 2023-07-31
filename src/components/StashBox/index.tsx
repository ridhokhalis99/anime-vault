import colors from "@/styles/colors";
import { IconBoxSeam } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";
import { ActionIcon } from "@mantine/core";
import { actionIconStyle, notificationStyle, textStyle } from "./styles";
import { isEmpty } from "lodash";
import { css } from "@emotion/react";

const StashBox = ({ toggleModal }: { toggleModal: () => void }) => {
  const { stashBox } = useAnime();
  const numOfItems = stashBox.length;

  const stashBoxTransitionStyle = css`
    ${actionIconStyle}
    opacity: ${isEmpty(stashBox) ? 0 : 1};
    transition: opacity 0.1s linear;
  `;

  return (
    <ActionIcon
      variant="filled"
      color="blue"
      css={stashBoxTransitionStyle}
      onClick={toggleModal}
    >
      <div css={notificationStyle}>
        <p css={textStyle}>{numOfItems}</p>
      </div>
      <IconBoxSeam color={colors.white} size={28} />
    </ActionIcon>
  );
};

export default StashBox;

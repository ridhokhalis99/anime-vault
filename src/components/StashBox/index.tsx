import colors from "@/styles/colors";
import { IconBoxSeam } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";
import { isEmpty } from "lodash";
import { ActionIcon } from "@mantine/core";
import { actionIconStyle, notificationStyle, textStyle } from "./styles";

const StashBox = () => {
  const { stashBox } = useAnime();
  const numOfItems = stashBox.length;

  return (
    <ActionIcon variant="filled" color="blue" css={actionIconStyle}>
      {!isEmpty(stashBox) && (
        <div css={notificationStyle}>
          <p css={textStyle}>{numOfItems}</p>
        </div>
      )}
      <IconBoxSeam color={colors.white} size={28} />
    </ActionIcon>
  );
};

export default StashBox;

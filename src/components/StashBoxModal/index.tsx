import { Button, Modal } from "@mantine/core";
import { useAnime } from "@/contexts/animeContext";
import { IconTrash, IconBookmarks, IconBoxSeam } from "@tabler/icons-react";
import colors from "@/styles/colors";
import { AnimeItem } from "@/types";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import {
  titleContainerStyle,
  titleStyle,
  listContainerStyle,
  rowStyle,
  titleAnimeStyle,
  trashIconStyle,
  buttonStyle,
} from "./styles";

const StashBoxModal = ({
  opened,
  toggle,
  toggleAddToCollectionModal,
}: {
  opened: boolean;
  toggle: () => void;
  toggleAddToCollectionModal: () => void;
}) => {
  const { stashBox, removeFromStashBox } = useAnime();

  const handleRemove = (anime: AnimeItem) => {
    removeFromStashBox(anime);
  };

  const handleAddToCollection = () => {
    toggle();
    toggleAddToCollectionModal();
  };

  useEffect(() => {
    if (opened && isEmpty(stashBox)) {
      toggle();
    }
  }, [stashBox]);

  return (
    <Modal
      opened={opened}
      onClose={toggle}
      centered
      title={
        <div css={titleContainerStyle}>
          <IconBoxSeam color={colors.grey900} size={24} />
          <p css={titleStyle}>Anime stash box</p>
        </div>
      }
      withOverlay
    >
      <div css={listContainerStyle}>
        {stashBox.map((anime) => (
          <div css={rowStyle} key={anime.id}>
            <p css={titleAnimeStyle}>{anime.title.romaji}</p>
            <IconTrash
              css={trashIconStyle}
              onClick={() => handleRemove(anime)}
              size={20}
            />
          </div>
        ))}
      </div>
      <Button
        css={buttonStyle}
        leftIcon={<IconBookmarks size={18} />}
        onClick={handleAddToCollection}
      >
        Add to collection ({stashBox.length})
      </Button>
    </Modal>
  );
};

export default StashBoxModal;

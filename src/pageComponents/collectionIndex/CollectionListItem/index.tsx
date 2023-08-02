import { css } from "@emotion/react";
import Image from "next/image";
import { Collection } from "@/types";
import { isEmpty } from "lodash";
import colors from "@/styles/colors";
import { IconMoodSad, IconTrash, IconEdit } from "@tabler/icons-react";
import {
  bottomButtonContainerStyle,
  bottomCardContainerStyle,
  emptyCardStyle,
  emptyTextStyle,
  formButtonContainerStyle,
  formContainerStyle,
  stackedCardsStyle,
  titleStyle,
} from "./styles";
import { useAnime } from "@/contexts/animeContext";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import EditCollectionForm from "../../../components/EditCollectionForm";

const CollectionItem = ({ collection }: { collection: Collection }) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const { animes, title, id } = collection;
  const { deleteCollection, updateCollection } = useAnime();

  const handleDeleteCollection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    deleteCollection(collection.id);
  };

  const handleEditCollection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsShowInput(true);
  };

  const onFormSubmit = (collectionName: string) => {
    updateCollection(Number(id), collectionName);
    setIsShowInput(false);
  };

  const onCancel = () => setIsShowInput(false);

  return (
    <div>
      <Link href={`/collection/${collection.id}`} css={stackedCardsStyle}>
        {isEmpty(animes) ? (
          <div css={emptyCardStyle}>
            <p css={emptyTextStyle}>Sorry, no anime in this collection yet.</p>
            <IconMoodSad color={colors.grey500} size={16} />
          </div>
        ) : (
          animes.map((anime, index) => {
            if (index > 3) return null;
            return (
              <div
                css={css`
                  ${emptyCardStyle}
                  left: ${index * 3}px;
                  top: ${index * 2.5}px;
                `}
                key={anime.id}
              >
                <Image
                  src={anime.coverImage.large}
                  alt="Card Image"
                  width={200}
                  height={300}
                />
              </div>
            );
          })
        )}
        {!isShowInput && (
          <div css={bottomCardContainerStyle}>
            <h2 css={titleStyle}>
              {title} ({animes.length})
            </h2>
            <div css={bottomButtonContainerStyle}>
              <ActionIcon
                color="gray"
                variant="light"
                onClick={handleEditCollection}
              >
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon
                color="red"
                variant="light"
                onClick={handleDeleteCollection}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </div>
          </div>
        )}
      </Link>

      {isShowInput && (
        <EditCollectionForm
          onFormSubmit={onFormSubmit}
          onCancel={onCancel}
          defaultValue={title}
          containerCss={formContainerStyle}
          buttonContainerCss={formButtonContainerStyle}
        />
      )}
    </div>
  );
};

export default CollectionItem;

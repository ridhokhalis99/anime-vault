import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { IconBookmarks, IconPlus } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import colors from "@/styles/colors";
import { useAnime } from "@/contexts/animeContext";
import CreateCollectionForm from "../CreateCollectionForm";
import {
  listContainerStyle,
  titleContainerStyle,
  titleStyle,
  emptyCollectionContainerStyle,
  emptycollectionTextStyle,
  rowStyle,
  newCollectionButtonStyle,
} from "./styles";
import { Collection } from "@/types";

const CollectionRow = ({
  collection,
  handleAddToCollection,
}: {
  collection: Collection;
  handleAddToCollection: (collectionId: number) => void;
}) => {
  return (
    <div css={rowStyle} key={collection.id}>
      <p>
        {collection.title} ({collection.animes.length})
      </p>
      <Button onClick={() => handleAddToCollection(collection.id)}>
        Add to collection
      </Button>
    </div>
  );
};

const AddToCollectionModal = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const { collections, setCollections, stashBox, setStashBox } = useAnime();

  const handleFormSubmit = (collectionName: string) => {
    setCollections([
      ...collections,
      {
        id: Date.now(),
        title: collectionName,
        animes: [],
      },
    ]);
    setIsShowInput(false);
  };

  const handleAddToCollection = (collectionId: number) => {
    setCollections((prev) => {
      return prev.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            animes: [...collection.animes, ...stashBox],
          };
        }
        return collection;
      });
    });
    setStashBox([]);
    toggle();
  };

  const renderEmptyCollection = (
    <div css={emptyCollectionContainerStyle}>
      <p css={emptycollectionTextStyle}>You don't have any collection yet</p>
      <Button
        leftIcon={<IconPlus size={18} />}
        onClick={() => setIsShowInput(true)}
      >
        Create a collection
      </Button>
    </div>
  );

  return (
    <Modal
      opened={opened}
      onClose={toggle}
      centered
      title={
        <div css={titleContainerStyle}>
          <IconBookmarks color={colors.grey900} size={24} />
          <p css={titleStyle}>Add to collection</p>
        </div>
      }
    >
      <div css={listContainerStyle}>
        {isEmpty(collections) ? (
          isShowInput ? (
            <CreateCollectionForm onFormSubmit={handleFormSubmit} />
          ) : (
            renderEmptyCollection
          )
        ) : (
          <>
            {isShowInput ? (
              <CreateCollectionForm onFormSubmit={handleFormSubmit} />
            ) : (
              <Button
                leftIcon={<IconPlus size={18} />}
                onClick={() => setIsShowInput(true)}
                css={newCollectionButtonStyle}
              >
                New collection
              </Button>
            )}
            {collections.map((collection) => (
              <CollectionRow
                key={collection.id}
                collection={collection}
                handleAddToCollection={handleAddToCollection}
              />
            ))}
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddToCollectionModal;

import AnimeList from "@/pageComponents/CollectionDetail/AnimeList";
import { useAnime } from "@/contexts/animeContext";
import { indexStyle, titleStyle } from "@/styles/styles";
import { useRouter } from "next/router";
import { IconEdit } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import EditCollectionForm from "@/components/EditCollectionForm";

const CollectionDetailPage = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const { getCollectionById, updateCollection } = useAnime();
  const router = useRouter();
  const { id } = router.query;

  const collection = getCollectionById(Number(id));

  const onFormSubmit = (collectionName: string) => {
    updateCollection(Number(id), collectionName);
    setIsShowInput(false);
  };

  const onCancel = () => setIsShowInput(false);

  return (
    <div css={indexStyle}>
      {isShowInput ? (
        <EditCollectionForm
          onFormSubmit={onFormSubmit}
          onCancel={onCancel}
          defaultValue={collection?.title}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "32px 0px 16px",
          }}
        >
          <h1 css={titleStyle}>{collection?.title}</h1>
          <ActionIcon
            color="gray"
            variant="light"
            onClick={() => setIsShowInput(true)}
          >
            <IconEdit />
          </ActionIcon>
        </div>
      )}
      <AnimeList animes={collection?.animes} />
    </div>
  );
};

export default CollectionDetailPage;

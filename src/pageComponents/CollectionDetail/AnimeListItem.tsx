import { AnimeItem } from "@/types";
import {
  listItemStyles,
  addStashStyles,
  posterStyles,
  titleStyles,
} from "./animeListItemStyles";
import Image from "next/image";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";
import { useRouter } from "next/router";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const { removeAnimeFromCollection } = useAnime();
  const router = useRouter();
  const { id: collectionId } = router.query;

  const {
    id,
    title: { romaji },
    coverImage: { large: image },
  } = anime;

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeAnimeFromCollection(Number(collectionId), anime.id);
  };

  return (
    <Link href={`/anime/${id}`}>
      <div css={listItemStyles}>
        <ActionIcon
          css={addStashStyles}
          color="red"
          variant="light"
          onClick={handleRemove}
        >
          <IconTrash />
        </ActionIcon>
        <Image
          alt={romaji}
          src={image}
          width={230}
          height={330}
          css={posterStyles}
        />
        <h2 css={titleStyles}>{romaji}</h2>
      </div>
    </Link>
  );
};

export default AnimeListItem;

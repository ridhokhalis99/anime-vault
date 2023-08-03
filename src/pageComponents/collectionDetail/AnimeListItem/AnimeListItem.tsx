import { AnimeItem } from "@/types";
import {
  listItemStyle,
  addStashStyle,
  posterStyle,
  titleStyle,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const { removeAnimeFromCollection } = useAnime();
  const router = useRouter();
  const { id: collectionId } = router.query;

  const {
    id,
    title: { romaji },
    coverImage: { large, medium },
  } = anime;

  const isMobile = useMediaQuery("(max-width: 768px)");

  const image = isMobile ? medium : large;

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeAnimeFromCollection(Number(collectionId), anime.id);
  };

  return (
    <Link href={`/anime/${id}`}>
      <div css={listItemStyle}>
        <ActionIcon
          css={addStashStyle}
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
          css={posterStyle}
        />
        <h2 css={titleStyle}>{romaji}</h2>
      </div>
    </Link>
  );
};

export default AnimeListItem;

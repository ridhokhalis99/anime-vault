import { AnimeItem } from "@/types";
import {
  listItemStyles,
  addStashStyles,
  posterStyles,
  titleStyles,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { IconPlaylistAdd, IconPlaylistX } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const {
    id,
    title: { romaji },
    coverImage: { large: image },
  } = anime;

  const { checkInStashBox, removeFromStashBox, addToStashBox } = useAnime();
  const isInStashBox = checkInStashBox(anime);

  const handleStashBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isInStashBox ? removeFromStashBox(anime) : addToStashBox(anime);
  };

  return (
    <Link href={`/anime/${id}`}>
      <div css={listItemStyles}>
        <ActionIcon
          css={addStashStyles}
          color="blue"
          variant="light"
          onClick={handleStashBox}
        >
          {isInStashBox ? <IconPlaylistX /> : <IconPlaylistAdd />}
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

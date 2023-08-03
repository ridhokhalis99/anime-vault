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
import { IconPlaylistAdd, IconPlaylistX } from "@tabler/icons-react";
import { useAnime } from "@/contexts/animeContext";
import { useMediaQuery } from "@mantine/hooks";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const {
    id,
    title: { romaji },
    coverImage: { large, medium },
  } = anime;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const image = isMobile ? medium : large;

  const { checkInStashBox, removeFromStashBox, addToStashBox } = useAnime();
  const isInStashBox = checkInStashBox(anime);

  const handleStashBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isInStashBox ? removeFromStashBox(anime) : addToStashBox(anime);
  };

  return (
    <Link href={`/anime/${id}`}>
      <div css={listItemStyle}>
        <ActionIcon
          css={addStashStyle}
          color={isInStashBox ? "red" : "blue"}
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
          css={posterStyle}
        />
        <h2 css={titleStyle}>{romaji}</h2>
      </div>
    </Link>
  );
};

export default AnimeListItem;

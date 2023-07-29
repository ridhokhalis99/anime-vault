import { AnimeItem } from "@/types";
import {
  listItemHoveredTitleStyles,
  listItemStyles,
  posterStyles,
  titleStyles,
} from "./styles";
import Image from "next/image";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const {
    title: { romaji },
    coverImage: { large: image },
  } = anime;
  return (
    <div css={listItemHoveredTitleStyles}>
      <div css={listItemStyles}>
        <Image
          alt={romaji}
          src={image}
          width={230}
          height={330}
          css={posterStyles}
        />
        <h2 css={titleStyles}>{romaji}</h2>
      </div>
    </div>
  );
};

export default AnimeListItem;

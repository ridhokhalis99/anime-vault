import { AnimeItem } from "@/types";
import { listItemStyles, posterStyles, titleStyles } from "./styles";
import Image from "next/image";
import Link from "next/link";

const AnimeListItem = ({ anime }: { anime: AnimeItem }) => {
  const {
    id,
    title: { romaji },
    coverImage: { large: image },
  } = anime;
  return (
    <Link href={`/anime/${id}`}>
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
    </Link>
  );
};

export default AnimeListItem;

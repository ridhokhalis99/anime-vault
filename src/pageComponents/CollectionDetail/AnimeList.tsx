import { AnimeItem } from "@/types";
import AnimeListItem from "./AnimeListItem";
import { animeListStyles } from "./animeListStyles";

const AnimeList = ({ animes }: { animes: AnimeItem[] | undefined }) => {
  return (
    <div css={animeListStyles}>
      {animes?.map((anime, index) => (
        <AnimeListItem key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;

import { AnimeItem } from "@/types";
import AnimeListItem from "../AnimeListItem";
import { animeListStyles } from "./styles";

const AnimeList = ({ animes }: { animes: AnimeItem[] }) => {
  return (
    <div css={animeListStyles}>
      {animes.map((anime, index) => (
        <AnimeListItem key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;

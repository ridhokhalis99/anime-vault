import { AnimeItem } from "@/types";
import AnimeListItem from "../AnimeListItem/AnimeListItem";
import { animeListStyles } from "./styles";

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

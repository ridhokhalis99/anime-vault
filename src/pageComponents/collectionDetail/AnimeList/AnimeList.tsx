import { AnimeItem } from "@/types";
import AnimeListItem from "../AnimeListItem/AnimeListItem";
import { listStyle } from "@/styles/styles";

const AnimeList = ({ animes }: { animes: AnimeItem[] | undefined }) => {
  return (
    <div css={listStyle}>
      {animes?.map((anime, index) => (
        <AnimeListItem key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;

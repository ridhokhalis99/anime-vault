import { AnimeItem } from "@/types";
import AnimeListItem from "../AnimeListItem";
import { animeListStyles } from "./styles";
import SkeletonList from "../SkeletonList";

const AnimeList = ({
  animes,
  loading,
}: {
  animes: AnimeItem[];
  loading: boolean;
}) => {
  return (
    <div css={animeListStyles}>
      {loading && <SkeletonList />}
      {animes.map((anime, index) => (
        <AnimeListItem key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;

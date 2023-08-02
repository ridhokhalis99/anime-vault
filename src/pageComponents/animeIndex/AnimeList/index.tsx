import { AnimeItem } from "@/types";
import AnimeListItem from "../AnimeListItem";
import { listStyle } from "@/styles/styles";
import SkeletonList from "../../../components/SkeletonList";

const AnimeList = ({
  animes,
  loading,
}: {
  animes: AnimeItem[];
  loading: boolean;
}) => {
  return (
    <div css={listStyle}>
      {loading && <SkeletonList />}
      {animes.map((anime, index) => (
        <AnimeListItem key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;

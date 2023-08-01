import AnimeList from "@/pageComponents/CollectionDetail/AnimeList";
import { useAnime } from "@/contexts/animeContext";
import { indexStyle } from "@/styles/styles";
import { useRouter } from "next/router";

const CollectionDetailPage = () => {
  const { getCollectionById } = useAnime();
  const router = useRouter();
  const { id } = router.query;

  const collection = getCollectionById(Number(id));

  return (
    <div css={indexStyle}>
      <AnimeList animes={collection?.animes} />
    </div>
  );
};

export default CollectionDetailPage;

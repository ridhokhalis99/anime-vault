import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/animeQueries";
import AnimeList from "../pageComponents/animeIndex/AnimeList";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { indexStyle, paginationStyle, titleStyle } from "@/styles/styles";
import StashBox from "@/components/StashBox";
import StashBoxModal from "@/components/StashBoxModal";
import { useDisclosure } from "@mantine/hooks";
import AddToCollectionModal from "@/components/AddToCollectionModal";
import { useAnime } from "@/contexts/animeContext";

const HomePage = () => {
  const { active, setPage } = usePagination({
    initialPage: 1,
    total: 100,
  });

  const { loading, data } = useQuery(GET_ALL_ANIME, {
    variables: { page: active, perPage: 10 },
  });

  const [openedStashBoxModal, { toggle: toggleStashBoxModal }] =
    useDisclosure();
  const [openedAddToCollectionModal, { toggle: toggleAddToCollectionModal }] =
    useDisclosure();

  const { stashBox } = useAnime();

  const animes = data?.Page?.media || [];

  return (
    <main css={indexStyle}>
      <h1 css={titleStyle}>Anime list</h1>
      <AnimeList animes={animes} loading={loading} />
      <Pagination
        total={100}
        onChange={setPage}
        withControls
        css={paginationStyle}
      />
      <StashBox toggleModal={toggleStashBoxModal} />
      <StashBoxModal
        opened={openedStashBoxModal}
        toggle={toggleStashBoxModal}
        toggleAddToCollectionModal={toggleAddToCollectionModal}
      />
      <AddToCollectionModal
        opened={openedAddToCollectionModal}
        toggle={toggleAddToCollectionModal}
        animes={stashBox}
      />
    </main>
  );
};

export default HomePage;

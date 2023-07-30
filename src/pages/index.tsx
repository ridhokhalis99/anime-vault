import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/animeQueries";
import AnimeList from "../components/AnimeList";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { indexStyles, paginationStyles } from "./styles";

const Home = () => {
  const { active, setPage } = usePagination({
    initialPage: 1,
    total: 100,
  });

  const { loading, error, data } = useQuery(GET_ALL_ANIME, {
    variables: { page: active, perPage: 10 },
  });

  const animes = data?.Page?.media || [];

  return (
    <main css={indexStyles}>
      <AnimeList animes={animes} loading={loading} />
      <Pagination
        total={100}
        onChange={setPage}
        withControls
        css={paginationStyles}
      />
    </main>
  );
};

export default Home;

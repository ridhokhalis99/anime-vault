import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/animeQueries";
import AnimeList from "../components/AnimeList";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";

export default function Home() {
  const { setPage, active } = usePagination({
    initialPage: 1,
    total: 100,
  });

  const { loading, error, data } = useQuery(GET_ALL_ANIME, {
    variables: { page: active, perPage: 10 },
  });

  const animes = data?.Page?.media || [];

  return (
    <main>
      <AnimeList animes={animes} loading={loading} />
      <Pagination
        total={100}
        onChange={setPage}
        withControls
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </main>
  );
}

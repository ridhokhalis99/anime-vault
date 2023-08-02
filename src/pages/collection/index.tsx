import CollectionList from "@/components/CollectionList";
import { indexStyle, titleStyle } from "@/styles/styles";
import CreateCollectionForm from "@/components/CreateCollectionForm";
import { useAnime } from "@/contexts/animeContext";

const CollectionListPage = () => {
  const { addCollection } = useAnime();

  return (
    <main css={indexStyle}>
      <h1 css={titleStyle}>My collections</h1>
      <CreateCollectionForm onFormSubmit={addCollection} />
      <CollectionList />
    </main>
  );
};

export default CollectionListPage;

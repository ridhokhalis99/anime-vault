import CollectionList from "@/pageComponents/collectionIndex/CollectionList";
import { indexStyle, titleStyle } from "@/styles/styles";
import CreateCollectionForm from "@/components/CreateCollectionForm";
import { useAnime } from "@/contexts/animeContext";

const CollectionIndexPage = () => {
  const { addCollection } = useAnime();

  return (
    <main css={indexStyle}>
      <h1 css={titleStyle}>My collections</h1>
      <CreateCollectionForm onFormSubmit={addCollection} />
      <CollectionList />
    </main>
  );
};

export default CollectionIndexPage;

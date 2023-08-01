import { useAnime } from "@/contexts/animeContext";
import { collectionListStyle } from "./styles";
import CollectionItem from "../CollectionListItem";

const CollectionList = () => {
  const { collections } = useAnime();
  return (
    <div css={collectionListStyle}>
      {collections.map((collection) => (
        <CollectionItem collection={collection} />
      ))}
    </div>
  );
};

export default CollectionList;

import { AnimeItem, Collection } from "@/types";
import { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";

interface AnimeContextProps {
  collections: Collection[];
  setCollections: React.Dispatch<React.SetStateAction<Collection[]>>;
  stashBox: AnimeItem[];
  setStashBox: React.Dispatch<React.SetStateAction<AnimeItem[]>>;
  addToStashBox: (anime: AnimeItem) => void;
  removeFromStashBox: (anime: AnimeItem) => void;
  checkInStashBox: (anime: AnimeItem) => boolean;
  addCollection: (collectionName: string) => void;
  deleteCollection: (collectionId: number) => void;
  getCollectionById: (collectionId: number) => Collection | undefined;
  removeAnimeFromCollection: (collectionId: number, animeId: number) => void;
  updateCollection: (collectionId: number, newTitle: string) => void;
  addToCollection: (collectionId: number, animes: AnimeItem[]) => void;
}

export const AnimeContext = createContext({} as AnimeContextProps);
export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [localStorageLoaded, setLocalStorageLoaded] = useState({
    stashBox: false,
    collections: false,
  });
  const [collections, setCollections] = useState<Collection[]>([]);
  const [stashBox, setStashBox] = useState<AnimeItem[]>([]);

  useEffect(() => {
    if (!localStorageLoaded.stashBox)
      return setLocalStorageLoaded({
        ...localStorageLoaded,
        stashBox: true,
      });
    localStorage.setItem("stashBox", JSON.stringify(stashBox));
  }, [stashBox]);

  useEffect(() => {
    if (!localStorageLoaded.collections)
      return setLocalStorageLoaded({
        ...localStorageLoaded,
        collections: true,
      });
    localStorage.setItem("collectionsAnimes", JSON.stringify(collections));
  }, [collections]);

  useEffect(() => {
    const stashBox = JSON.parse(localStorage.getItem("stashBox") || "[]");
    const collectionsAnimes = JSON.parse(
      localStorage.getItem("collectionsAnimes") || "[]"
    );
    if (stashBox) {
      setStashBox(stashBox);
    }
    if (collectionsAnimes) {
      setCollections(collectionsAnimes);
    }
  }, []);

  const addToStashBox = (anime: AnimeItem) => {
    setStashBox([...stashBox, anime]);
  };

  const removeFromStashBox = (anime: AnimeItem) => {
    setStashBox(stashBox.filter((item) => item.id !== anime.id));
  };

  const checkInStashBox = (anime: AnimeItem) => {
    return stashBox.some((item) => item.id === anime.id);
  };

  const addCollection = (collectionName: string) => {
    const newCollection = {
      id: Date.now(),
      title: collectionName,
      animes: [],
    };
    setCollections([...collections, newCollection]);
  };

  const deleteCollection = (collectionId: number) => {
    setCollections(
      collections.filter((collection) => collection.id !== collectionId)
    );
  };

  const getCollectionById = (collectionId: number) => {
    return collections.find((collection) => collection.id === collectionId);
  };

  const removeAnimeFromCollection = (collectionId: number, animeId: number) => {
    const collection = getCollectionById(collectionId);
    if (!collection) return;
    const newCollection = {
      ...collection,
      animes: collection.animes.filter((anime) => anime.id !== animeId),
    };
    setCollections(
      collections.map((collection) =>
        collection.id === collectionId ? newCollection : collection
      )
    );
  };

  const updateCollection = (collectionId: number, newTitle: string) => {
    const collection = getCollectionById(collectionId);
    if (!collection) return;
    const newCollection = {
      ...collection,
      title: newTitle,
    };
    setCollections(
      collections.map((collection) =>
        collection.id === collectionId ? newCollection : collection
      )
    );
  };

  const addToCollection = (collectionId: number, animes: AnimeItem[]) => {
    const collection = getCollectionById(collectionId);
    if (!collection) return;

    const filteredAnimes = animes.filter(
      (anime) => !collection.animes.some((item) => item.id === anime.id)
    );

    const newCollection = {
      ...collection,
      animes: [...collection.animes, ...filteredAnimes],
    };

    setCollections((collections) =>
      collections.map((collection) =>
        collection.id === collectionId ? newCollection : collection
      )
    );
  };

  const value = {
    collections,
    setCollections,
    stashBox,
    setStashBox,
    addToStashBox,
    removeFromStashBox,
    checkInStashBox,
    addCollection,
    deleteCollection,
    getCollectionById,
    removeAnimeFromCollection,
    updateCollection,
    addToCollection,
  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};

export const useAnime = () => {
  return useContext(AnimeContext);
};

export default AnimeContext;

import { AnimeItem, Collection } from "@/types";
import { isEmpty } from "lodash";
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
}

export const AnimeContext = createContext({} as AnimeContextProps);
export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [stashBox, setStashBox] = useState<AnimeItem[]>([]);

  useEffect(() => {
    if (isEmpty(stashBox)) return;
    localStorage.setItem("stashBox", JSON.stringify(stashBox));
  }, [stashBox]);

  useEffect(() => {
    if (isEmpty(collections)) return;
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

  const value = {
    collections,
    setCollections,
    stashBox,
    setStashBox,
    addToStashBox,
    removeFromStashBox,
    checkInStashBox,
  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};

export const useAnime = () => {
  return useContext(AnimeContext);
};

export default AnimeContext;

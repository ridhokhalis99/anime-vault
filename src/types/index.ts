export interface AnimeItem {
  id: number;
  title: {
    romaji: string;
  };
  status: string;
  description: string;
  genres: string[];
  type: string;
  coverImage: {
    large: string;
  };
}

export interface AnimeDetail {
  id: number;
  title: {
    romaji: string;
  };
  bannerImage: string | null;
  description: string;
  coverImage: {
    extraLarge: string | null;
    large: string | null;
  };
  genres: string[];
  tags: {
    name: string;
  }[];
}

export interface Collection {
  id: number;
  title: string;
  animes: AnimeItem[];
}

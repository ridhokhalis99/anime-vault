export interface AnimeItem {
  id: number;
  title: {
    romaji: string;
  };
  status: string;
  description: string;
  averageScore: number;
  genres: string[];
  type: string;
  coverImage: {
    large: string;
  };
}

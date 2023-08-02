import { Badge } from "@mantine/core";
import { badgeContainerStyle } from "./styles";

const Genres = ({ genres }: { genres: string[] }) => {
  return (
    <div css={badgeContainerStyle}>
      {genres.map((category: any) => (
        <Badge key={category}>{category}</Badge>
      ))}
    </div>
  );
};

export default Genres;

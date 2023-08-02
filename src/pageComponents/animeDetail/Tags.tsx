import { tagTextStyle } from "./styles";
import { badgeContainerStyle } from "./styles";
import { Badge } from "@mantine/core";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      <h3 css={tagTextStyle}>Tags</h3>
      <div css={badgeContainerStyle}>
        {tags.map((tag: any) => (
          <Badge key={tag.name} color="gray" radius={0}>
            {tag.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Tags;

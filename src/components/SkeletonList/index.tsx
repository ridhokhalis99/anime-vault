import { Skeleton } from "@mantine/core";
import { skeletonItemStyle } from "./styles";

const SkeletonList = () => {
  const POSTER_HEIGHT = 330;
  const TITLE_HEIGHT = 20;
  const TITLE_WIDTH = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

  return Array(10)
    .fill(null)
    .map((_, index) => (
      <div key={index}>
        <Skeleton height={POSTER_HEIGHT} />
        <Skeleton
          height={TITLE_HEIGHT}
          width={TITLE_WIDTH}
          css={skeletonItemStyle}
        />
      </div>
    ));
};

export default SkeletonList;

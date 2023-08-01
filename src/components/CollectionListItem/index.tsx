import { css } from "@emotion/react";
import Image from "next/image";
import { Collection } from "@/types";
import { isEmpty } from "lodash";
import colors from "@/styles/colors";
import { IconMoodSad } from "@tabler/icons-react";
import {
  emptyCardStyle,
  emptyTextStyle,
  stackedCardsStyle,
  titleStyle,
} from "./styles";

const CollectionItem = ({ collection }: { collection: Collection }) => {
  const { animes, title } = collection;
  return (
    <div css={stackedCardsStyle}>
      {isEmpty(animes) ? (
        <div css={emptyCardStyle}>
          <p css={emptyTextStyle}>Sorry, no anime in this collection yet.</p>
          <IconMoodSad color={colors.grey500} size={16} />
        </div>
      ) : (
        animes.map((anime, index) => {
          if (index > 3) return null;
          return (
            <div
              css={css`
                ${emptyCardStyle}
                left: ${index * 3}px;
                top: ${index * 2.5}px;
              `}
              key={anime.id}
            >
              <Image
                src={anime.coverImage.large}
                alt="Card Image"
                width={200}
                height={300}
              />
            </div>
          );
        })
      )}
      <h2 css={titleStyle}>
        {title} ({animes.length})
      </h2>
    </div>
  );
};

export default CollectionItem;

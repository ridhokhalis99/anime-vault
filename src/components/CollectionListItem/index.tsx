import { css } from "@emotion/react";
import Image from "next/image";
import { Collection } from "@/types";
import { isEmpty } from "lodash";
import colors from "@/styles/colors";
import { IconMoodSad, IconTrash } from "@tabler/icons-react";
import {
  bottomCardContainerStyle,
  emptyCardStyle,
  emptyTextStyle,
  stackedCardsStyle,
  titleStyle,
  trashIconStyle,
} from "./styles";
import { useAnime } from "@/contexts/animeContext";
import Link from "next/link";

const CollectionItem = ({ collection }: { collection: Collection }) => {
  const { animes, title } = collection;
  const { deleteCollection } = useAnime();

  const handleDeleteCollection = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    deleteCollection(collection.id);
  };

  return (
    <Link href={`/collection/${collection.id}`} css={stackedCardsStyle}>
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
      <div css={bottomCardContainerStyle}>
        <h2 css={titleStyle}>
          {title} ({animes.length})
        </h2>
        <IconTrash
          css={trashIconStyle}
          size={16}
          onClick={handleDeleteCollection}
        />
      </div>
    </Link>
  );
};

export default CollectionItem;

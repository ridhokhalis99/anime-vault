import { GET_ANIME_BY_ID } from "@/graphql/animeQueries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import {
  bannerContainerStyles,
  bannerOverlayStyles,
  detailContainerStyles,
  headerContainerStyles,
  imageStyles,
  textContainerStyles,
  titleStyles,
  descriptionStyles,
  imageButtonContainerStyles,
  buttonStyles,
  badgeContainerStyles,
  tagTextStyles,
} from "./styles";
import { Button, Badge } from "@mantine/core";
import { IconBookmarks } from "@tabler/icons-react";
import AddToCollectionModal from "@/components/AddToCollectionModal";
import { useDisclosure } from "@mantine/hooks";

const AnimeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
    variables: { id },
  });

  const [openedAddToCollectionModal, { toggle: toggleAddToCollectionModal }] =
    useDisclosure();

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const animeDetail = data?.Media;
  const {
    title: { romaji },
    bannerImage,
    description,
    coverImage: { extraLarge },
    genres,
    tags,
  } = animeDetail;
  const parsedDescription = ReactHtmlParser(description);
  return (
    <>
      <main>
        <div css={bannerContainerStyles}>
          <div css={bannerOverlayStyles} />
          <Image src={bannerImage} alt={romaji} layout="fill" />
        </div>
        <div css={detailContainerStyles}>
          <div css={headerContainerStyles}>
            <div css={imageButtonContainerStyles}>
              <Image
                src={extraLarge}
                alt={romaji}
                height={300}
                width={200}
                css={imageStyles}
              />
              <Button
                css={buttonStyles}
                leftIcon={<IconBookmarks size={18} />}
                onClick={toggleAddToCollectionModal}
              >
                Add to collection
              </Button>
            </div>
            <div css={textContainerStyles}>
              <h1 css={titleStyles}>{romaji}</h1>
              <div css={badgeContainerStyles}>
                {genres.map((category: any) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
              <p css={descriptionStyles}>{parsedDescription}</p>
              <div>
                <h3 css={tagTextStyles}>Tags</h3>
                <div css={badgeContainerStyles}>
                  {tags.map((tag: any) => (
                    <Badge key={tag.name} color="gray" radius={0}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AddToCollectionModal
        opened={openedAddToCollectionModal}
        toggle={toggleAddToCollectionModal}
        animes={[animeDetail]}
      />
    </>
  );
};

export default AnimeDetailPage;

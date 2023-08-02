import { GET_ANIME_BY_ID } from "@/graphql/animeQueries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import {
  bannerContainerStyle,
  bannerOverlayStyle,
  detailContainerStyle,
  headerContainerStyle,
  imageStyle,
  textContainerStyle,
  titleStyle,
  descriptionStyle,
  imageButtonContainerStyle,
  buttonStyle,
  badgeContainerStyle,
  tagTextStyle,
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
        <div css={bannerContainerStyle}>
          <div css={bannerOverlayStyle} />
          <Image src={bannerImage} alt={romaji} layout="fill" />
        </div>
        <div css={detailContainerStyle}>
          <div css={headerContainerStyle}>
            <div css={imageButtonContainerStyle}>
              <Image
                src={extraLarge}
                alt={romaji}
                height={300}
                width={200}
                css={imageStyle}
              />
              <Button
                css={buttonStyle}
                leftIcon={<IconBookmarks size={18} />}
                onClick={toggleAddToCollectionModal}
              >
                Add to collection
              </Button>
            </div>
            <div css={textContainerStyle}>
              <h1 css={titleStyle}>{romaji}</h1>
              <div css={badgeContainerStyle}>
                {genres.map((category: any) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
              <p css={descriptionStyle}>{parsedDescription}</p>
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

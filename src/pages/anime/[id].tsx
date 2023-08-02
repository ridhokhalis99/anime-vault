import { GET_ANIME_BY_ID } from "@/graphql/animeQueries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  bannerContainerStyle,
  bannerOverlayStyle,
  detailContainerStyle,
  headerContainerStyle,
  imageStyle,
  textContainerStyle,
  titleStyle,
  imageButtonContainerStyle,
  buttonStyle,
} from "../../pageComponents/animeDetail/styles";
import { Button } from "@mantine/core";
import { IconBookmarks } from "@tabler/icons-react";
import AddToCollectionModal from "@/components/AddToCollectionModal";
import { useDisclosure } from "@mantine/hooks";
import Genres from "@/pageComponents/animeDetail/Genres";
import Description from "@/pageComponents/animeDetail/Description";
import Tags from "@/pageComponents/animeDetail/Tags";

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
    coverImage: { extraLarge, large },
    genres,
    tags,
  } = animeDetail;

  const coverImage = extraLarge || large || "";

  return (
    <main>
      <div css={bannerContainerStyle}>
        <div css={bannerOverlayStyle} />
        {bannerImage && <Image src={bannerImage} alt={romaji} layout="fill" />}
      </div>
      <div css={detailContainerStyle}>
        <div css={headerContainerStyle}>
          <div css={imageButtonContainerStyle}>
            <Image
              src={coverImage}
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
            <Genres genres={genres} />
            <Description description={description} />
            <Tags tags={tags} />
          </div>
        </div>
      </div>
      <AddToCollectionModal
        opened={openedAddToCollectionModal}
        toggle={toggleAddToCollectionModal}
        animes={[animeDetail]}
      />
    </main>
  );
};

export default AnimeDetailPage;

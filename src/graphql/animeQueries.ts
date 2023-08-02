import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME) {
        id
        title {
          romaji
        }
        status
        description
        averageScore
        genres
        type
        coverImage {
          large
        }
      }
      pageInfo {
        total
        lastPage
        hasNextPage
      }
    }
  }
`;

export const GET_ANIME_BY_ID = gql`
  query media($id: Int, $type: MediaType) {
    Media(id: $id, type: $type) {
      id
      title {
        romaji
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      description
      season
      seasonYear
      genres
      tags {
        name
      }
    }
  }
`;

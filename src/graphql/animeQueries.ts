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
    }
  }
`;

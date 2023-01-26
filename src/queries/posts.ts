import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    posts {
      title
      slug
      content {
        html
      }
      date
      cover {
        id
        url
      }
    }
  }
`;

export const GET_POSTS_SLUGS = gql`
  {
    posts {
      slug
    }
  }
`;

export const GET_POST = gql`
  query Post($slug: String!) {
    posts(where: { slug: $slug }) {
      title
      slug
      content {
        markdown
        html
      }
      date
      cover {
        url
      }
    }
  }
`;

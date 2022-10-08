import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      title
      slug
      id
      cover {
        url
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      avatar {
        url
      }
      name
      id
      slug
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($authorSlug: String!) {
    author(where: { slug: $authorSlug }) {
      name
      id
      field
      avatar {
        url
      }
      description {
        html
      }
      posts {
        id
        title
        slug
        cover {
          url
        }
      }
    }
  }
`;
const GET_BLOG = gql`
  query getBlog($BlogSlug: String!) {
    post(where: { slug: $BlogSlug }) {
      cover {
        url
      }
      id
      slug
      title
      content {
        html
      }
      comments {
        text
        name
      }
      author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;
const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      text
      id
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS, GET_AUTHOR, GET_BLOG, GET_COMMENTS };

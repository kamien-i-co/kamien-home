import gql from "graphql-tag";

const TAG_ARTICLES_QUERY = gql`
  query Tag($id: ID!) {
    tag(id: $id) {
      id
      name
      articles {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default TAG_ARTICLES_QUERY;

import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        author {
          bio
          name
          photo {
            url
          }
        }
        slug
        title
        categories {
          name
        }
        excerpt
        featuredPost
        createdAt
        featuredImage {
          url
        }
      }
    }
  `;
  const { posts } = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    query
  );
  return posts;
};

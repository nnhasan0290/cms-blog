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

export const getRecentPosts = async () => {
  const query = gql`
    query recentPosts {
      posts(orderBy: publishedAt_DESC, last: 3) {
        slug
        title
        featuredImage {
          url
        }
        createdAt
      }
    }
  `;
  const data = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query);
  return data;
};

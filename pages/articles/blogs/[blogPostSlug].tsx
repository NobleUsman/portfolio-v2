import { getPostBySlug, getAllPosts } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import type PostType from "../../../interfaces/post";
import Post from "../../../components/post";

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function BlogPost({ post, preview }: Props) {
  const navigateBackTo = {
    url: "/articles/blogs",
    title: "blogs",
  };

  return <Post post={post} postType="blog" navigateBackTo={navigateBackTo} />;
}

type Params = {
  params: {
    blogPostSlug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(
    params.blogPostSlug,
    ["title", "date", "slug", "author", "content", "ogImage", "coverImage"],
    "blog"
  );
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"], "blog");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          blogPostSlug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

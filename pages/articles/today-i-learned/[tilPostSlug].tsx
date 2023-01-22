import { getPostBySlug, getAllPosts } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import type PostType from "../../../interfaces/post";
import Post from "../../../components/post";

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function TILPost({ post, preview }: Props) {
  const navigateBackTo = {
    url: "/articles/today-i-learned",
    title: "today i learned",
  };

  return <Post post={post} postType="til" navigateBackTo={navigateBackTo} />;
}

type Params = {
  params: {
    tilPostSlug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(
    params.tilPostSlug,
    ["title", "date", "slug", "author", "content", "ogImage", "coverImage"],
    "til"
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
  const posts = getAllPosts(["slug"], "til");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          tilPostSlug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

import Container from "../../components/container";
import MorePosts from "../../components/more-posts";
import Intro from "../../components/intro";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import Footer from "../../components/footer";
import HeroPost from "../../components/hero-post";
import { CMS_NAME } from "../../lib/constants";

type Props = {
  allBlogPosts: Post[];
  allTILPosts: Post[];
};

export default function Articles({ allBlogPosts, allTILPosts }: Props) {
  // const heroPost = allBlogPosts[0]
  return (
    <>
      <Head>
        <title>Usman Shaikh | Articles</title>
      </Head>

      <Container>
        {/* pass the icon in here as per page header design */}
        <Intro title="articles">
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            A collection of posts that I often write as part of my learnings &
            experiences
          </h4>
        </Intro>

        {allBlogPosts.length > 0 && (
          <MorePosts posts={allBlogPosts.slice(0, 4)} postType="blog">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold leading-tight">
              blogs
            </h2>
          </MorePosts>
        )}
        {/* add button to go to blogs page here */}

        {allTILPosts.length > 0 && (
          <MorePosts posts={allTILPosts.slice(0, 4)} postType="til">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold leading-tight">
              today i learned
            </h2>
          </MorePosts>
        )}
        {/* add button to go to TIL page here */}

        <Footer />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allBlogPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    "blog"
  );

  const allTILPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    "til"
  );

  return {
    props: {
      allBlogPosts: allBlogPosts,
      allTILPosts: allTILPosts,
    },
  };
};

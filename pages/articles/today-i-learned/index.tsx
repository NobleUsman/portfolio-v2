import Container from "../../../components/container";
import MorePosts from "../../../components/more-posts";
import Intro from "../../../components/intro";
import { getAllPosts } from "../../../lib/api";
import Head from "next/head";
import Post from "../../../interfaces/post";
import Footer from "../../../components/footer";
import HeroPost from "../../../components/hero-post";

type Props = {
  allTILPosts: Post[];
};

export default function Index({ allTILPosts }: Props) {
  const heroPost = allTILPosts[0]
  return (
    <>
      <Head>
        <title>Usman Shaikh | Today I Learned</title>
      </Head>

      <Container>
        {/* pass the icon in here as per page header design */}
        <Intro title="today i learned">
          {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
              A collection of posts that I often write as part of my learnings & experiences
            </h4>   */}
        </Intro>

        {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              postType="til"
            />
          )}

        {allTILPosts.length > 0 && (
          <MorePosts posts={allTILPosts} postType="til" />
        )}

        <Footer />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allTILPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    "til"
  );

  return {
    props: {
      allTILPosts: allTILPosts,
    },
  };
};

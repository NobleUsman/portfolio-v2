import Container from "../../../components/container";
import MorePosts from "../../../components/more-posts";
import Intro from "../../../components/intro";
import { getAllPosts } from "../../../lib/api";
import Head from "next/head";
import Post from "../../../interfaces/post";
import Footer from "../../../components/footer";
import HeroPost from "../../../components/hero-post";
import { CMS_NAME } from "../../../lib/constants";

type Props = {
  allBlogPosts: Post[];
};

export default function Index({ allBlogPosts }: Props) {
  const heroPost = allBlogPosts[0]
  return (
    <>
      <Head>
        <title>Usman Shaikh | Blogs</title>
      </Head>

      <Container>
        {/* pass the icon in here as per page header design */}
        <Intro title="blogs">
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
              postType="blog"
            />
          )}

        {allBlogPosts.length > 0 && (
          <MorePosts posts={allBlogPosts} postType="blog" />
        )}

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

  return {
    props: {
      allBlogPosts: allBlogPosts,
    },
  };
};

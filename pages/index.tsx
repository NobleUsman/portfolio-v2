import Container from '../components/container'
import MorePosts from '../components/more-posts'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

import Progress from '../components/progress'

// ! this page will be "hero section"

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      {/* <Layout> */}
        <Head>
          <title>Next.js Blog Example with base</title>
        </Head>
        <Container>

          {/* <div className='w-1/2'>
            <Progress width={70} type='determinate' />
            <br />
            <Progress width={30} type='determinate' />
            <br />
            <Progress type='indeterminate' />
          </div> */}
          

          <Intro title='homepage intro comp' />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              postType='blog'
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} postType="blog" />}
        </Container>
      {/* </Layout> */}
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ], 'blog')

  const tilposts = getAllPosts([
    'title',
    'slug',
  ], 'til')
  
  console.log('index-tilPosts ===> ', tilposts)

  return {
    props: { allPosts },
  }
}

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import FetchPostType from '../interfaces/fetchPostType'

const blogPostsDirectory = join(process.cwd(), '_posts', '_blogs')
const tilPostsDirectory = join(process.cwd(), '_posts', '_tils')

export function getPostSlugs(type: FetchPostType) {
  switch (type) {
    case "blog":
      return fs.readdirSync(blogPostsDirectory)

    case "til":
      return fs.readdirSync(tilPostsDirectory)
  
    default:
      break;
  }
}

export function getPostBySlug(slug: string, fields: string[] = [], type: FetchPostType) {
  // dynamic-routing.md, ['slug']
  const realSlug = slug.replace(/\.md$/, '') // dynamic-routing

  let fullPath;

  switch (type) {
    case "blog":
      fullPath = join(blogPostsDirectory, `${realSlug}.md`)
      break;

    case "til":
      fullPath = join(tilPostsDirectory, `${realSlug}.md`)
      break;
  
    default:
      break;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = [], type: FetchPostType) {
  const slugs = getPostSlugs(type)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, type))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  console.log('posts ====> ', posts)
  return posts
}

console.log('blogfilenames ======> ', getPostSlugs('blog'))
console.log('tilfilenames ======> ', getPostSlugs('til'))

// const tilPosts = getAllPosts([
//   'title',
//   'date',
//   'slug',
//   'author',
//   'coverImage',
//   'excerpt',
// ], 'til')

// console.log('tilPosts ===> ', tilPosts)
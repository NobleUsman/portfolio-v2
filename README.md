# Template & Self Notes

## Template Notes

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

### Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Self Notes - customizations

### CSS changes

- changed accent and gray color to set color blind contrast

- tailwind config changes
  - addition of portfolio colors

- index.css changes
  - addition of custom class for navlink
  
- change name later to global.css, move `markdown.module.css` to styles folder

- **use DM SANS everywhere, use template font for blogs and excerpts**

### Markup changes

- commented `CoverImage, Avatar, HeroPosts` comps, no need

- Header changed to "Back to Blogs"

- Implement footer for all pages

### Content changes

- **IMP, re-think & change**

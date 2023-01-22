import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import FetchPostType from '../interfaces/fetchPostType'

type Props = {
  title: string
  src: string,
  postType: FetchPostType,
  slug?: string
}

const CoverImage = ({ title, src, postType, slug }: Props) => {

  const hrefPath = `${
    postType === "blog"
      ? `/articles/blogs/[blogPostSlug]`
      : `/articles/today-i-learned/[tilPostSlug]`
  }`;
  const asPath = `${
    postType === "blog"
      ? `/articles/blogs/${slug}`
      : `/articles/today-i-learned/${slug}`
  }`;

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={asPath} href={hrefPath} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

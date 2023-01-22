import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import FetchPostType from "../interfaces/fetchPostType";

type Props = {
  posts: Post[];
  postType: FetchPostType;
  children?: React.ReactNode;
};

const MorePosts = ({ posts, postType, children }: Props) => {
  return (
    <section>
      {/* this node will contain posts-type title for articles page */}
      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            postType={postType}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;

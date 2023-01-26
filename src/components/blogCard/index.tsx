import Link from "next/link";
import { FC } from "react";

type Props = {
  post: any;
};

const BlogCard: FC<Props> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div>
        <div
          style={{ backgroundImage: `url(${post.cover.url})` }}
          className="w-full h-64 bg-no-repeat bg-cover bg-center"
        />
        <div className="bg-white">
          <h3>{post.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

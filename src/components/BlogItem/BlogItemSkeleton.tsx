import "./BlogItem.scss";

interface BlogItemSkeletonProps {
  style?: React.CSSProperties;
}

const BlogItemSkeleton = ({ style }: BlogItemSkeletonProps) => {
  return (
    <div className="blog-item" style={style}>
      <div
        className="blog-item__image blog-item__image-skeleton"
        title="loading..."
      />
      <div className="blog-item__row-skeleton" />
    </div>
  );
};

export default BlogItemSkeleton;

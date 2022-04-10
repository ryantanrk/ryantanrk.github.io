import "./BlogItem.scss";
import dayjs from "dayjs";

interface BlogItemProps {
  title: string;
  href: string;
  date: string;
  imageUrl: string;
  style?: React.CSSProperties;
};

const BlogItem = ({ title, href, date, imageUrl, style }: BlogItemProps) => {
  return (
    <div className="blog-item" style={style}>
      <a target="new" href={href}>
        <img className="blog-item__image" src={imageUrl} alt={title} />
        <div className="blog-item__row">
          <div className="blog-item__title">{title}</div>
          <div className="blog-item__date">{dayjs(date).format("MMM YYYY")}</div>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
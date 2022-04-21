import "./Social.scss";
import Icon from "../Icon/Icon";

interface SocialProps {
  label: string;
  icon?: string;
  link: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Social = ({
  label,
  icon,
  link,
  color,
  className = "",
  style = {},
}: SocialProps) => {
  style.background = color;

  return (
    <div className={`social ${className}`} style={style}>
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Icon href={icon || ""} />
        <span className="social__label">{label}</span>
      </a>

      <style>
        {`
          .icon {
            margin-right: var(--margin-sm);
          }
        `}
      </style>
    </div>
  );
};

export default Social;

import "./Social.scss";
import Icon from "../Icon/Icon";

interface SocialProps {
  label: string;
  icon?: string;
  link: string;
  color?: string;
  className?: string;
  style?: {};
}

const Social = ({ label, icon, link, color, className, style }: SocialProps) => {
  return (
    <div className={`social ${className}`} style={style}>
      <a href={link}>
        <Icon href={icon || ""} />
        <span className="social__label">{label}</span>
      </a>

      <style>
        {`
          .social {
            background-color: ${color || "var(--onyx)"};
          }
        `}
      </style>
    </div>
  );
};

export default Social;
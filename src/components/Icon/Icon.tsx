interface IconProps {
  href: string;
  style?: React.CSSProperties;
  fill?: string;
  stroke?: string;
}

const Icon = ({ href = "", style = {}, fill = "#fff", stroke = "#fff" }: IconProps) => {
  style.width = "24px";
  style.height = "24px";

  return (
    <svg
      className="icon"
      style={style}
      fill={fill}
      stroke={stroke}
    >
      <use href={href} />
    </svg>
  );
};

export default Icon;
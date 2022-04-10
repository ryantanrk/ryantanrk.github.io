interface IconProps {
  href: string;
  style?: {};
}

const Icon = ({ href, style }: IconProps =
  {
    href: "",
    style: {
      width: "24px",
      height: "24px"
    }
  }) => {
  return (
    <svg style={{
      width: "24px",
      height: "24px"
    }}>
      <use href={href} />
    </svg>
  );
};

export default Icon;
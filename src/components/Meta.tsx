interface MetaProps {
  title: string;
  description?: string;
  imageUrl?: string;
};

const Meta = (props: MetaProps) => {
  return (
    <head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </head>
  );
};

export default Meta;
interface MetaProps {
  title: string;
  description?: string;
};

const Meta = ({ title, description }: MetaProps) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
  );
};

export default Meta;
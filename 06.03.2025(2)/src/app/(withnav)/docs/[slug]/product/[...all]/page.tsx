interface IProductPageProps {
  params: {
    all: string;
  };
}

export default function ProductPage({ params }: IProductPageProps) {
  const { all } = params;

  return <div>{all}</div>;
}

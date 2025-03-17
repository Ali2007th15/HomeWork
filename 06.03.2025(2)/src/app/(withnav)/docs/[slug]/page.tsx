interface CategoryProps {
  params: {
    slug: string;
  };
}

export default async function Category({ params }: CategoryProps) {
  const { slug } = params;
  console.log(slug);

  return (
    <div className="container mt-12 pt-12">

      <h1>Category</h1>
      <div className="flex justify-start gap-2">
        <h2>Dynamic data:</h2>
        <p>{slug}</p>
      </div>
    </div>
  );
}

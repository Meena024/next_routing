import Link from "next/link";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const products = data.products;

  return (
    <>
      <h2>Products Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h2>Products Page</h2>
      <ul>
        {[...Array(10)].map((_, i) => (
          <li key={i + 1}>
            <Link href={`/products/${i + 1}`}>Product {i + 1}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

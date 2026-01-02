import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>{product.title}</h2>

      {/* ✅ Static image from public */}
      <img
        src="/products/placeholder.jpg"
        alt={product.title}
        style={{
          width: "100px",
          height: "100px",
          marginBottom: "1rem",
          display: "block",
        }}
      />

      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <br />

      <Link href="/products">← Back to Products</Link>
    </div>
  );
}

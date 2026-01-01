export default async function ProductDetails({ params }) {
  const { id } = await params;
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>Product {id} details page — content coming soon!</h3>
    </div>
  );
}

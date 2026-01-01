import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <header
          style={{
            backgroundColor: "wheat",
            padding: "1rem",
            flexShrink: 0,
          }}
        >
          <h1>Products Store</h1>

          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>

        {/* Content */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "wheat",
            padding: "1rem",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <p>© 2026 Products Store</p>
        </footer>
      </body>
    </html>
  );
}

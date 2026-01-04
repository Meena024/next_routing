import Link from "next/link";
import { cookies } from "next/headers";

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore?.token;

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              src="/products/Logo.png"
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <h1 style={{ margin: "0 auto" }}>Products Store</h1>
          </div>

          <nav style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>

            {token ? (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <form action="/api/logout" method="POST">
                  <button type="submit">Logout</button>
                </form>
              </>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </nav>
        </header>

        <main style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
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

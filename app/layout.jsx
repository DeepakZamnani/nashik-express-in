export const metadata = {
  title: 'Nashik Express - Local News Portal',
  description: 'Latest news from Nashik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', borderBottom: '2px solid #000' }}>
          <h1>Nashik Express</h1>
          <nav>
            <a href="/" style={{ marginRight: '20px' }}>Home</a>
            <a href="/categories">Categories</a>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '40px' }}>
          <p>&copy; 2026 Nashik Express. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

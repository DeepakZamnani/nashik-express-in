import Link from 'next/link'

const API_URL = 'https://nashik-express-backend.vercel.app/api'

async function getArticles() {
  try {
    const res = await fetch(`${API_URL}/articles?status=published&limit=50`, {
      cache: 'no-store' // Always get fresh data
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.data || []
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function HomePage() {
  const articles = await getArticles()

  return (
    <div>
      <h1>Latest News</h1>

      {articles.length === 0 && (
        <p>No articles published yet. Check back soon!</p>
      )}

      <div style={{ display: 'grid', gap: '30px' }}>
        {articles.map(article => (
          <article key={article.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
            <h2>
              <Link href={`/articles/${article.slug}`} style={{ color: '#000', textDecoration: 'none' }}>
                {article.title}
              </Link>
            </h2>
            
            <div style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
              {article.category_name && (
                <span style={{ marginRight: '15px' }}>📁 {article.category_name}</span>
              )}
              <span>👁️ {article.views} views</span>
              <span style={{ marginLeft: '15px' }}>
                📅 {new Date(article.published_at).toLocaleDateString()}
              </span>
            </div>

            {article.excerpt && (
              <p style={{ color: '#444' }}>{article.excerpt}</p>
            )}

            <Link href={`/articles/${article.slug}`} style={{ color: '#0066cc' }}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

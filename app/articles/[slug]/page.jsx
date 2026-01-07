import Link from 'next/link'
import { notFound } from 'next/navigation'

const API_URL = 'https://nashik-express-backend.vercel.app/api'

async function getArticle(slug) {
  try {
    const res = await fetch(`${API_URL}/articles/slug/${slug}`, {
      cache: 'no-store'
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div>
      <Link href="/" style={{ color: '#0066cc', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to home
      </Link>

      <article>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>{article.title}</h1>

        <div style={{ color: '#666', fontSize: '14px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid #eee' }}>
          {article.category_name && (
            <span style={{ marginRight: '15px' }}>📁 {article.category_name}</span>
          )}
          <span>👁️ {article.views} views</span>
          <span style={{ marginLeft: '15px' }}>
            📅 {new Date(article.published_at).toLocaleDateString()}
          </span>
          {article.author_name && (
            <span style={{ marginLeft: '15px' }}>✍️ {article.author_name}</span>
          )}
        </div>

        {article.excerpt && (
          <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#555', marginBottom: '30px' }}>
            {article.excerpt}
          </p>
        )}

        <div style={{ lineHeight: '1.8', fontSize: '16px', whiteSpace: 'pre-wrap' }}>
          {article.content}
        </div>
      </article>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
        <Link href="/" style={{ color: '#0066cc' }}>
          ← Back to all articles
        </Link>
      </div>
    </div>
  )
}

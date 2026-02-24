import { pushLinkClick } from '../utils/dataLayer'

const INSIGHTS = [
  { title: 'Placeholder article one', description: 'Short description for the first insight.', url: 'https://example.com/insights/1' },
  { title: 'Placeholder article two', description: 'Short description for the second insight.', url: 'https://example.com/insights/2' },
  { title: 'Placeholder article three', description: 'Short description for the third insight.', url: 'https://example.com/insights/3' },
]
const VIEW_ALL_URL = 'https://example.com/insights'

function SectionInsights() {
  return (
    <div className="container">
      <div className="section-insights">
        <h2 className="section-insights__headline">Insights</h2>
        <div className="section-insights__grid">
          {INSIGHTS.map((insight) => (
            <article key={insight.title} className="insight-card">
              <h3 className="insight-card__title">{insight.title}</h3>
              <p className="insight-card__desc">{insight.description}</p>
              <a
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                className="insight-card__link"
                onClick={() => pushLinkClick({ componentName: 'read-article', componentType: 'link', componentTarget: insight.url, componentText: 'read article', section: 'insights' })}
              >
                Read Article
              </a>
            </article>
          ))}
        </div>
        <a
          href={VIEW_ALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary section-insights__cta"
          onClick={() => pushLinkClick({ componentName: 'view-all-insights', componentType: 'link', componentTarget: VIEW_ALL_URL, componentText: 'view all insights', section: 'insights' })}
        >
          View All Insights
        </a>
      </div>
      <style>{`
        .section-insights__headline { font-size: 1.75rem; margin: 0 0 2rem 0; }
        .section-insights__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .section-insights__grid { grid-template-columns: repeat(3, 1fr); }
        }
        .insight-card {
          padding: 1.5rem;
          background: var(--color-bg-elevated);
          border-radius: 4px;
          border: 1px solid var(--color-border);
        }
        .insight-card__title { font-size: 1.1rem; margin: 0 0 0.5rem 0; }
        .insight-card__desc { margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--color-text-muted); }
        .insight-card__link { color: var(--color-accent); font-weight: 600; }
        .insight-card__link:hover { text-decoration: underline; }
        .section-insights__cta { margin-top: 2rem; display: inline-block; }
      `}</style>
    </div>
  )
}

export default SectionInsights

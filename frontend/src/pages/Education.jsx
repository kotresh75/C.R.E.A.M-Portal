import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Education = () => {
  const [category, setCategory] = useState('');

  const filteredArticles = category ? articles.filter(a => a.category === category) : articles;

  return (
    <div style={{ padding: '24px' }}>
      <header style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h2 className="display-medium" style={{ color: 'var(--md-sys-color-primary)' }}>Renewable Energy Knowledge Base</h2>
        <p className="title-large" style={{ marginTop: '8px' }}>Learn how to transition to a sustainable future.</p>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
        {['', 'Solar', 'Wind', 'Biomass'].map(cat => (
          <button 
            key={cat}
            onClick={() => setCategory(cat)} 
            className={`m3-button ${category === cat ? 'm3-button--filled' : 'm3-button--outlined'}`}>
            {cat || 'All'}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="m3-card m3-card--elevated" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ 
                    backgroundColor: 'var(--md-sys-color-secondary-container)', 
                    color: 'var(--md-sys-color-on-secondary-container)',
                    padding: '4px 12px', 
                    borderRadius: '16px', 
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>{article.category}</span>
                  <span className="label-medium" style={{ color: 'var(--md-sys-color-outline)' }}>{article.readTime}</span>
                </div>
                
                <h3 className="headline-small" style={{ margin: '16px 0 8px 0' }}>{article.title}</h3>
                
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '16px', flexGrow: 1 }}>
                  {article.content.substring(0, 100)}...
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span className="label-medium">{article.author}</span>
                  <Link to={`/education/${article.id}`} className="m3-button m3-button--text" style={{ textDecoration: 'none' }}>
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No articles found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Education;

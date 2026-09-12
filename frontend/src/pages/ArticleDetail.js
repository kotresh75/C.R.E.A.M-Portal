import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <button onClick={() => navigate('/education')} className="m3-button m3-button--filled">Back to Education</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 0 48px 0', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/education')} 
        className="m3-button m3-button--text" 
        style={{ marginBottom: '24px' }}>
        ← Back to all articles
      </button>
      
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', marginBottom: '32px' }} 
      />
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ 
          backgroundColor: 'var(--md-sys-color-secondary-container)', 
          color: 'var(--md-sys-color-on-secondary-container)',
          padding: '4px 12px', 
          borderRadius: '16px', 
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>{article.category}</span>
        <span className="label-large" style={{ color: 'var(--md-sys-color-outline)' }}>{article.readTime}</span>
      </div>
      
      <h1 className="display-medium" style={{ color: 'var(--md-sys-color-on-surface)', marginBottom: '8px' }}>
        {article.title}
      </h1>
      
      <p className="title-medium" style={{ color: 'var(--md-sys-color-primary)', marginBottom: '32px' }}>
        By {article.author}
      </p>
      
      <div className="body-large" style={{ lineHeight: '1.8', color: 'var(--md-sys-color-on-surface-variant)' }}>
        {article.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: '16px' }}>{paragraph}</p>
        ))}
      </div>
      
      <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
        <h4 className="title-medium" style={{ marginBottom: '16px' }}>Tags</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {article.tags.map(tag => (
            <span key={tag} style={{ 
              backgroundColor: 'var(--md-sys-color-surface-variant)', 
              color: 'var(--md-sys-color-on-surface-variant)',
              padding: '4px 12px', 
              borderRadius: '8px', 
              fontSize: '0.9rem'
            }}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

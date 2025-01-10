import React from 'react';

const NewsList = ({ articles }) => {
    if (!articles || articles.length === 0) {
        return <p>No articles available.</p>; // Handle the empty state
    }

    return (
        <div>
            {articles.map((article, index) => (
                <div 
                    key={index} 
                    style={{
                        marginBottom: '20px', 
                        border: '1px solid #ccc', 
                        padding: '15px', 
                        borderRadius: '8px'
                    }}
                >
                    <h3>{article.title}</h3>
                    <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
                    <p><strong>Source:</strong> {article.source?.name || 'Unknown'}</p>
                    <p>{article.description}</p>
                    {article.urlToImage && (
                        <img 
                            src={article.urlToImage} 
                            alt={article.title} 
                            style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                    )}
                    <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
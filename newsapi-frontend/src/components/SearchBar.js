import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
    return (
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news..."
                style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    flex: '1',
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
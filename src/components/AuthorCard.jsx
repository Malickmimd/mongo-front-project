import React from 'react';
import './AuthorCard.css';

export default function AuthorCard({ book }) {
    return (
        <div className="author-card">
            <h2>{book.title}</h2>
            <ul>
                {book.authors.map((author, index) => (
                    <li key={index}>{author}</li>
                ))}
            </ul>
        </div>
    );
}

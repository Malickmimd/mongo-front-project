import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorCard from './AuthorCard';
import './AuthorCard.css'; // Assurez-vous d'importer les styles

export default function AuthorList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/publis')
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données : ", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement des données.</div>;
    }

    return (
        <div className="container">
            {books.map((book, index) => (
                <AuthorCard key={index} book={book} />
            ))}
        </div>
    );
}

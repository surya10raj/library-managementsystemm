import React, { useState } from 'react';
import "./App.css"
function AddBookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if title and author are not empty
    if (title.trim() === '' || author.trim() === '') {
      setError('Please fill out both title and author fields.');
      return;
    }

    // If validation passes, reset error and add the book
    setError('');
    addBook(title, author);

    // Reset form fields
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;

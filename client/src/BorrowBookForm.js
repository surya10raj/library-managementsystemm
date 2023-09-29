import React, { useState } from 'react';
import "./BorrowBookForm.css";
function BorrowBookForm({ books, onBorrow }) {
  const [selectedBook, setSelectedBook] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookIndex = books.findIndex((book) => book.title === selectedBook);

    if (bookIndex !== -1 && !books[bookIndex].borrowedBy) {
      onBorrow(bookIndex);
      setSelectedBook('');
    } else {
      alert('Book not available for return or already return.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="borrow-book-form">
      <label>
        Select a book to return:
        <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
          <option value="" disabled>Select a book</option>
          {books.map((book, index) => (
            <option key={index} value={book.title}>
              {book.title} by {book.author}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">return Book</button>
    </form>
  );
}

export default BorrowBookForm;

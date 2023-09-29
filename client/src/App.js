
import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import RegistrationForm from './RegistrationForm';
import BorrowBookForm from './BorrowBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, borrowedBy: null }]);
  };

  const handleRegistration = (username, password) => {
    setUser({ username, password });
  };

  const handleBorrow = (bookIndex) => {
    const updatedBooks = [...books];
    updatedBooks[bookIndex].borrowedBy = user.username;
    setBooks(updatedBooks);

    setBorrowedBooks([...borrowedBooks, updatedBooks[bookIndex]]);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Library Management System</h1>
      {user ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <AddBookForm addBook={addBook} />
          <BookList books={books} />
          <BorrowBookForm books={books} onBorrow={handleBorrow} />
          <h2>Borrowed Books</h2>
          <BookList books={borrowedBooks} />
        </>
      ) : (
        <RegistrationForm handleRegistration={handleRegistration} />
      )}
    </div>
  );
}

export default App;

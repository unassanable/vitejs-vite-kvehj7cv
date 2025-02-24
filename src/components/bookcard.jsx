// write the book component code here
import React from "react";

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />
      <div className="book-info">
        <h3>{title}</h3>
        <p>by {author}</p>
      </div>
    </div>
  );
};

export default BookCard;

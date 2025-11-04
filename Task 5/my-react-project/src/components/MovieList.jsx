import React from "react";

export default function MovieList({ movies, onRemove }) {
  if (movies.length === 0)
    return <p className="empty">No movies yet 🎥</p>;

  return (
    <ul className="movie-list">
      {movies.map((m) => (
        <li key={m.id} className="movie-item">
          <div>
            <h3>{m.title}</h3>
            <p className="stars">{"⭐".repeat(m.rating)}</p>
            {m.comment && <p className="comment">“{m.comment}”</p>}
          </div>
          <button className="delete-btn" onClick={() => onRemove(m.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

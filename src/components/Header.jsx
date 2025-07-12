//Header.jsx
//This component display the blog title.
import React from 'react';

function Header({ name }) {
  return (
    <header className="blog-header">
      <h1>{name}</h1>
    </header>
  );
}
export default Header;
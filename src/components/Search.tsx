'use client';

import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  console.log('SEARCH', search);

  return (
    <input
      className="rounded border border-red-500"
      type="text"
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;

import React, { useState } from 'react';
import useDebounce from './useDebounce';

function MyComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>Debounced search term: {debouncedSearchTerm}</p>
    </div>
  );
}

export default MyComponent;

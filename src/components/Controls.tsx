import React, { useEffect, useState } from "react";

interface ControlsProps {
  onSearch: (query: string) => void;
  onSortChange: (sortVal: string) => void;
  currentSort: string;
}

const Controls: React.FC<ControlsProps> = ({
  onSearch,
  onSortChange,
  currentSort,
}) => {
  const [inputValue, setInputValue] = useState("");

  // Debounce search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(inputValue.trim());
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, onSearch]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="controls-bar">
      <input
        type="text"
        id="search-bar"
        placeholder="Search for a movie..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select id="sort-select" value={currentSort} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="release_asc">Release Date (Asc)</option>
        <option value="release_desc">Release Date (Desc)</option>
        <option value="rating_asc">Rating (Asc)</option>
        <option value="rating_desc">Rating (Desc)</option>
      </select>
    </div>
  );
};

export default Controls;

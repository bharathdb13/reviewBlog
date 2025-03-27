import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Technology" },
  { id: 5, name: "Sports" },
  { id: 7, name: "Health" },
  { id: 11, name: "Science" },
  { id: 3, name: "Business" },
  { id: 9, name: "Entertainment" }
];

const SearchBar = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name} (ID: {category.id})
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    router.push(`/products?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="custom-search_col col-12">
      <div className="hm-form_area">
        <form action="#" className="hm-searchbox" onSubmit={handleSearch}>
          {" "}
          {/* Attach onSubmit event */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for product"
          />
          <button className="header-search_btn" type="submit">
            {" "}
            {/* Change to submit type */}
            <i className="ion-ios-search-strong">
              <span>Search</span>
            </i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

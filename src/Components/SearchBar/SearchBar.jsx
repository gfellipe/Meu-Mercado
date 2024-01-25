import { useState, useContext } from "react";
import "./SearchBar.css";
import { IoIosSearch } from "react-icons/io";
import fetchProducts from "../../api/fecthProducts";
import AppContext from "../../Context/AppContext";

export const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setSearchValue("");
    setLoading(false);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search-input"
        required
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type="submit" className="search-button">
        <IoIosSearch />
      </button>
    </form>
  );
};

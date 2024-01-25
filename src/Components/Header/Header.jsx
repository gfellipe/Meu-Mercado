import CartButton from "../CartButton/CartButton";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";
import Logo from "../../assets/logo_200x200.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="Logo" className="header-img" />
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
};

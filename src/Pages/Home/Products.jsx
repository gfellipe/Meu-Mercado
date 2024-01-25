import { useContext } from "react";
import "./Products.css";
import { useEffect } from "react";
import fecthProducts from "../../api/fecthProducts";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { Loading } from "../../Components/Loading/Loading";
import AppContext from "../../Context/AppContext";

export const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fecthProducts("iphone").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
};

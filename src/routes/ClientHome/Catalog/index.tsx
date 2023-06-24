import "./styles.css";
import ProductCard from "../../../components/ProductCard";
import SearchBar from "../../../components/SearchBar";
import LoadingMore from "../../../components/LoadingMore";
import * as productService from '../../../services/product-service'


export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            productService.findAll().map(product => <ProductCard key={product.id} product={product}/>)
          } 
        </div>
        <LoadingMore />
      </section>
    </main>
  );
}

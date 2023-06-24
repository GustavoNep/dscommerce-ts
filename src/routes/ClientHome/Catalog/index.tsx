import "./styles.css";
import ProductCard from "../../../components/ProductCard";
import SearchBar from "../../../components/SearchBar";
import LoadingMore from "../../../components/LoadingMore";
import * as productService from '../../../services/product-service'
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { CategoryDTO } from "../../../models/category";

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);


  useEffect(() => {

    
    productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      })
      
  }, [])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(product => <ProductCard key={product.id} product={product}/>)
          } 
        </div>
        <LoadingMore />
      </section>
    </main>
  );
}

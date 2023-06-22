import './styles.css'
import HeaderClient from '../../components/HeaderClient'
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import LoadingMore from '../../components/LoadingMore';

export default function Catalog() {
  return (
    <>
      <HeaderClient />  
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <LoadingMore />
        </section>
      </main>
    </>
  );
}

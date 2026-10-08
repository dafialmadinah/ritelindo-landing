import { ProductCard } from "@/features/landing/components/ProductCard";
import { products } from "@/features/landing/data/content";

export function ProductsSection() {
  return (
    <section className="products content-shell" id="produk">
      <div className="section-heading">
        <div className="section-label">
          <span>02</span>
          <p>Produk utama</p>
        </div>
        <h2>Rak yang bekerja untuk ruang dan produk Anda.</h2>
      </div>

      <ProductCard product={products[0]} />
      <div className="product-pair">
        {products.slice(1).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

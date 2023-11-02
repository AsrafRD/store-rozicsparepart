import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = async ({
  title,
  items
}) => {
  const categories = await getCategories();
  return (
    <div className="space-y-4">
      <h3 className="font-bold md:text-3xl">{title}</h3>
      <MainNav data={categories}/>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;
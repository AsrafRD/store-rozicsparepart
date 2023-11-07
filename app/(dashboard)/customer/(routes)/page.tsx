import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import MainNav from "@/components/main-nav";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("32bfa7c2-9531-4dc6-88e6-0a09838f8b35");
  const categories = await getCategories();

  return (
    <Container>
      <div className="space-y-2">
        <Billboard data={billboard} />
        <div className="mt-4">
          {/* <MainNav data={categories} /> */}
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

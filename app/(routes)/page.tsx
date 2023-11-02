import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import MainNav from "@/components/main-nav";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
<<<<<<< HEAD
  const billboard = await getBillboard("");
  // const billboard = await getBillboard("1836815f-c264-4a91-b5a5-190557c1cb09");
=======
  const billboard = await getBillboard("1836815f-c264-4a91-b5a5-190557c1cb09");
>>>>>>> a7b7f40669453d9beea9e85f8bb4eeaac92bb790
  const categories = await getCategories();

  return (
    <Container>
<<<<<<< HEAD
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div>
          <MainNav data={categories} />
=======
      <div className="space-y-5 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="border">
          
        <MainNav data={categories} />
>>>>>>> a7b7f40669453d9beea9e85f8bb4eeaac92bb790
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

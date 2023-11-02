import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getProductByKeyword from "@/actions/get-searchProducts";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    keyword: string;
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductByKeyword({ keyword: params.keyword });

  if (!product) {
    return null;
  }

  const suggestedProducts = await getProducts({
    categoryId: product[0]?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <ProductList title="Related Items" items={product} />
          <hr className="my-10" />
          <ProductList title="Suggested Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

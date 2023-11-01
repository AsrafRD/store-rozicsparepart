import { ProductBrand } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/productBrands`;

const getproductBrands = async (): Promise<ProductBrand[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getproductBrands;
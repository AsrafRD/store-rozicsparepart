import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  keyword: string; // Menambahkan parameter keyword untuk pencarian
  // Anda juga dapat menambahkan parameter lain jika diperlukan
}

const getProductByKeyword = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      keyword: query.keyword, // Menggunakan parameter keyword
      // Tambahkan parameter lain jika diperlukan
    },
  });

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
};

export default getProductByKeyword;

// import Link from "next/link";
// import { useEffect, useState } from 'react';
// import MainNav from "@/components/main-nav";
// import Container from "@/components/ui/container";
// import NavbarActions from "@/components/navbar-actions";
// import getCategories from "@/actions/get-categories";
// import getProductSearch from "@/actions/get-productSearch";
// import { DataTable } from "@/components/ui/data-table";
// import { Product } from "@/types";

// const Navbar = () => {
//   const [products, setProducts] = useState<Product[]>([]); // Inisialisasi dengan tipe Product[]

//   const categories = getCategories();
//   const columns = [
//     {
//       accessorKey: "name",
//       header: "Name",
//     },
//     {
//       accessorKey: "isArchived",
//       header: "Archived",
//     },
//     {
//       accessorKey: "isFeatured",
//       header: "Featured",
//     },
//     {
//       accessorKey: "price",
//       header: "Price",
//     },
//     {
//       accessorKey: "category",
//       header: "Category",
//     },
//     {
//       accessorKey: "vehicleBrand",
//       header: "Vehicle Brand",
//     },
//     {
//       accessorKey: "vehicleType",
//       header: "Vehicle Type",
//     },
//     {
//       accessorKey: "productBrand",
//       header: "Product Brand",
//     },
//     {
//       accessorKey: "createdAt",
//       header: "Date",
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = { categoryId: 'your_category_id' }; // Gantilah 'your_category_id' dengan ID kategori yang sesuai
//       const productsData = await getProductSearch(query);
//       setProducts(productsData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="border-b">
//       <Container>
//         <div className="flex flex-col">
//           <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center border-b">
//             <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
//               <p className="font-bold text-xl">STORE</p>
//             </Link>
//             <DataTable searchKey="name" columns={columns} data={products} />
//             <NavbarActions />
//           </div>
//           <div className="grid grid-cols-4 bg-gray-100">
//             {/* <MainNav data={categories} />
//             <MainNav data={categories} />
//             <MainNav data={categories} />
//             <MainNav data={categories} /> */}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

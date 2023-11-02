import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="flex flex-col">
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center border-b">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">STORE</p>
            </Link>
            <NavbarActions />
          </div>
          <div className="grid grid-cols-4 bg-gray-100">
            <MainNav data={categories} />
            <MainNav data={categories} />
            <MainNav data={categories} />
            <MainNav data={categories} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

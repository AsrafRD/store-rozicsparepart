"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavbarActions from "@/components/navbar-actions";
import InputSearch from "./input-search";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import { UserButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

const navigation = {
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { session } = useSession();

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-60 flex-col bg-white mt-10 shadow-xl">
                <div className="flex justify-between items-center pb-4 pt-5 mr-5">
                  <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">Rozic Sparepart</p>
                  </Link>
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <X size={32} aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                  <p className="font-bold text-xl">Rozic Sparepart</p>
                </Link> */}

                <div className="space-y-4 border-t border-gray-200 px-4 py-4">
                  <Link href="/" className="-m-2 p-2 flex lg:ml-0">
                    <p className="font-medium text-gray-900">Dashboard</p>
                  </Link>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 py-4 my-0 border-t border-gray-200 px-4">
                  {session ? (
                    <div>
                      <div className="flex items-center">
                        <div>
                          <UserButton afterSignOutUrl="/" />
                        </div>
                        <p className="ml-2">Akun</p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flow-root">
                        <a
                          href="http://localhost:3001/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3001%2F"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Sign in
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="http://localhost:3001/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3001%2F"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Create account
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-0">
                  <div className="space-y-4 pt-14 mb-0 border-b border-gray-200 px-4">
                    <div className="flow-root">
                      <div className="flex justify-center">
                        <ul className="flex jusstify-center items-center text-gray-500 space-x-4 mt-4 mb-6">
                          <li>
                            <Link href="#">
                              <FacebookLogo size={25} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <WhatsappLogo size={25} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <InstagramLogo size={25} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <TiktokLogo size={25} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="-m-2 block p-2 font-medium text-gray-900">
                          Alamat
                        </p>
                        <div className="text-sm">
                          <ul className="flex flex-col justify-center items-center">
                            <li>
                              <p>Candirejo Rt.02 / Rw.03</p>
                            </li>
                            <li>
                              <p>Ketangi, Kaliangkrik, Magelang</p>
                            </li>
                            <li>
                              <p>Jawa Tengah, (56153) </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-orange-300 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Flyout menus */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                {/* Search */}
                <InputSearch />

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <NavbarActions />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

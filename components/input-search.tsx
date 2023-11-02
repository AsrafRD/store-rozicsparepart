"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current?.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative px-2">
      <input
        placeholder="search product....."
        className="w-full h-9 p-4 rounded-xl border-2 focus:border-none"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-4" onClick={handleSearch}>
        <MagnifyingGlassIcon className='h-5 w-5' />
      </button>
    </div>
  );
};

export default InputSearch;

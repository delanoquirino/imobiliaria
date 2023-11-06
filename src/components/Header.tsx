import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">Imóveis Prime</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="" className="hover:text-emerald-900 transition">Log in</Link>
          <Link href="" className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 rounded-lg transition">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

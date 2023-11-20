import Link from "next/link";
import React from "react";
import { LoginButton } from "./LoginButton";

export const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">Imóveis Prime</Link>
        </div>
        <LoginButton/>
      </div>
    </header>
  );
};

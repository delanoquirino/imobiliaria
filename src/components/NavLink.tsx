import Link from "next/link";

import { getServerSession } from "next-auth";

export const NavLink = async () => {
  return (
    <ul className="flex items-center gap-10">
      <li>
        <Link href="/">Home</Link>
      </li>
            
    </ul>
  );
};

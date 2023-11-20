import Link from "next/link";

import { SignOutButton } from "./signOutButton";
import { getServerSession } from "next-auth";

export const NavLink = async () => {
  const session = await getServerSession();
  return (
    <ul className="flex items-center gap-10">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/private">Private</Link>
      </li>
      {session && (
        <li>
          <SignOutButton>sair</SignOutButton>
        </li>
      )}
    </ul>
  );
};

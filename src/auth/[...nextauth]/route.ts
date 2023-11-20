import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

const authOptions: NextAuthOptions = {
  providers: [],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

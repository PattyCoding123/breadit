import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

/* handler will accomdate any logic from any call made by
a user using this route as a GET or POST action */
export { handler as GET, handler as POST };

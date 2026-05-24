import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (credentials) => {
      const email = String(credentials?.email || "");
      const password = String(credentials?.password || "");
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return null;
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return null;
      return { id: user.id, email: user.email, name: user.name, role: user.role } as any;
    }
  })],
  callbacks: {
    async jwt({ token, user }) { if (user) token.role = (user as any).role; return token; },
    async session({ session, token }) { if (session.user) { (session.user as any).id = token.sub; (session.user as any).role = token.role; } return session; },
    authorized({ auth, request }) {
      const path = request.nextUrl.pathname;
      if (path.startsWith("/admin")) return !!auth?.user && (auth.user as any).role === "ADMIN";
      return true;
    }
  }
});

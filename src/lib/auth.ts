import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { ENV } from "@/env"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GithubProvider({
            clientId: ENV.GITHUB_ID,
            clientSecret: ENV.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: PrismaAdapter(prisma),
    secret: ENV.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
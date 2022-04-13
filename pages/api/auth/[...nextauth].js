import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { connectDb } from "../../../lib/db";
import User from "../../../schema/User";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user, token }) {
      connectDb();
      const currentUser = await User.findById(user.id);
      if (currentUser.watchedSeries == null) {
        currentUser.watchedSeries = [];
        currentUser.watchedEpisodes = [];
        currentUser.save();
      }
      return { ...session, user: { ...session.user, id: user.id } };
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});

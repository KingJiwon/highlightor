import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ca2f15076eb2f947c606',
      clientSecret: 'a855607b154f72a5d5dabc1a2bbf3f3899ddf8bd',
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: 'wldnjsisking123',
};
export default NextAuth(authOptions);

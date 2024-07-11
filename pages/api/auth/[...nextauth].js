import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ca2f15076eb2f947c606',
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            },
          );

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || '로그인에 실패했습니다.');
          }
          const user = await res.json();
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          console.error('Authorize error:', error.message);
          throw new Error(error.message || '로그인에 실패했습니다.');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user: {
            name: user.name,
            email: user.email,
          },
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token?.user) {
        return { ...session, user: token.user };
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};
export default NextAuth(authOptions);

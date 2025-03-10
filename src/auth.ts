import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  // session:{}
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const res = await axios.post('http://localhost:8088/api/v1/auth/admin/login', {
            email: credentials.email,
            password: credentials.password,
          });

          // console.log('🚀 ~ authorize ~ res:', res.data);

          if (res.data) {
            return res.data;
          }

          // Return null if user data could not be retrieved
          return null;
        } catch (error) {
          console.log(error);

          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  callbacks: {
    async session({ session /* user, token */ }) {
      // console.log('🚀 ~ session ~ token:', token);
      // console.log('🚀 ~ session ~ user:', user);
      // console.log('🚀 ~ session ~ session:', session);
      //   session.accessToken = token.accessToken;
      //   session.user = token.user;
      return session;
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

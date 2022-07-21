import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Provider } from 'next-auth/providers';

const prisma = new PrismaClient();

const providers: Provider[] = [
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID as string,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
];

if (process.env.DEV_LOGIN) {
  providers.unshift(
    CredentialsProvider({
      name: 'Developer Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
      },
      async authorize(credentials) {
        try {
          return prisma.user.findUnique({
            where: { email: credentials?.email },
          });
        } catch {
          throw new Error('User not found.');
        }
      },
    }),
  );
}

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: { strategy: 'jwt' },
  theme: {
    colorScheme: 'light',
  },
};

export default NextAuth(authOptions);

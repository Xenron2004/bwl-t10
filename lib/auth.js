import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import clientPromise from './mongodb';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        rsplId: { label: 'RSPL ID', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.rsplId || !credentials?.password) {
          return null;
        }

        try {
          const client = await clientPromise;
          const users = client.db('rspl').collection('users');
          
          const user = await users.findOne({ rsplId: credentials.rsplId });
          
          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          
          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            rsplId: user.rsplId,
            paymentStatus: user.paymentStatus || 'pending'
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.rsplId = user.rsplId;
        token.paymentStatus = user.paymentStatus;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.rsplId = token.rsplId;
      session.user.paymentStatus = token.paymentStatus;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
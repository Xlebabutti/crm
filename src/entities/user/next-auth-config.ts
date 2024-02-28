import { privateConfig } from '@/shared/config/private';
import { dbClient } from '@/shared/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compact } from 'lodash-es';
import { AuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { createUserUseCase } from './_use-cases/create-user';

const prismaAdapter = PrismaAdapter(dbClient);

const emailToken = privateConfig.TEST_EMAIL_TOKEN
    ? {
          generateVerificationToken: () => privateConfig.TEST_EMAIL_TOKEN ?? '',
          sendVerificationRequest: () =>
              console.log("we don't send emails in test mode"),
      }
    : {};

export const nextAuthConfig: AuthOptions = {
    adapter: {
        ...prismaAdapter,
        createUser: (user) => {
            return createUserUseCase.exec(user);
        },
    } as AuthOptions['adapter'],
    callbacks: {
        session: async ({ session, user }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    role: user.role,
                },
            };
        },
    },
    pages: {
        signIn: '/auth/sign-in',
        newUser: '/auth/new-user',
        verifyRequest: '/auth/verify-request',
        error: '/auth/error',
    },
    providers: compact([
        EmailProvider({
            ...emailToken,
            server: {
                host: privateConfig.EMAIL_SERVER_HOST,
                port: privateConfig.EMAIL_SERVER_PORT,
                auth: {
                    user: privateConfig.EMAIL_SERVER_USER,
                    pass: privateConfig.EMAIL_SERVER_PASSWORD,
                },
            },
            from: privateConfig.EMAIL_FROM,
        }),
        privateConfig.GITHUB_ID &&
            privateConfig.GITHUB_SECRET &&
            GithubProvider({
                clientId: privateConfig.GITHUB_ID,
                clientSecret: privateConfig.GITHUB_SECRET,
                allowDangerousEmailAccountLinking: true,
            }),
        privateConfig.GOOGLE_ID &&
            privateConfig.GOOGLE_SECRET &&
            GoogleProvider({
                clientId: privateConfig.GOOGLE_ID,
                clientSecret: privateConfig.GOOGLE_SECRET,
                allowDangerousEmailAccountLinking: true,
            }),
    ]),
};

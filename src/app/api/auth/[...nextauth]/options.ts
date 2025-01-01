import env from "@/config/env"
import fetchPonyfill from "fetch-ponyfill"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import "../../../../css/style.css"

// const { fetch } = fetchPonyfill();

export const options: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email:",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) {
          return null
        }

        let user = null
        try {
          const { fetch } = fetchPonyfill()
          const response: any = await fetch(`${env.API_ENDPOINT}auth/portal-login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.username,
              password: credentials?.password,
            }),
          })
          user = await response.json()
        } catch (ex) {
          console.log("Error during sign-in:", ex)
          throw new Error("Service unavailable. Please try again later. ")
        }

        if (user?.success) {
          return user
        } else {
          throw new Error(user?.message)
        }
      },
    }),
  ],
  theme: {
    colorScheme: "light",
    brandColor: "#05382D",
    logo: "/images/app-logo.png",
  },
  session: {
    maxAge: 12 * 60 * 60, // Set session max age to 12 hours (43200 seconds)
    // updateAge: 24 * 60 * 60,
  },

  // cookies: {
  //   sessionToken: {
  //     name: "next-auth.session-token",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV !== "development",
  //     },
  //   },
  // },

  jwt: {
    maxAge: 12 * 60 * 60, // Set session max age to 12 hours (43200 seconds)
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.access_token = user?.token
        // token.role = user?.role;
        token.roleIds = user?.roleIds
        token.email = user?.email
        token.displayName = user?.displayName || "Admin"
        token.description = user?.description || "Admin"
      }
      return token
    },
    session: async ({ session, token }) => {
      session.user = token as any
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

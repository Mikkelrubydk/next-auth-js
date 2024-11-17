import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const testUser = {
          id: 1,
          name: "Test User",
          email: "test@mail.dk",
          password: "test01"
        };
        console.log("authorize", credentials);

        const { email, password } = credentials;

        if (email !== testUser.email || password !== testUser.password) {
          return { error: "Invalid email or password" };
        }

        return testUser; // Return the user on success
      }
    })
  ]
});

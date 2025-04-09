import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      authorize: async (credentials) => {
        // Ensure this function is correctly defined
      }
    })
  ],
});

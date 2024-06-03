import connectDB from '@/config/database'
import User from '@/model/User'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // when we click on login, we can choose a google account and not use the same google account logged in before
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  callbacks: {
    // invoked on successful signin
    async signIn({ profile }) {
      // a. connect to db
      await connectDB()

      // b. check if user exists
      const userExists = await User.findOne({ email: profile.email })

      // c. if not, create user
      if (!userExists) {
        // truncate username
        const username = profile.name.slice(0, 20)
        // create user
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        })
        // d. if no error, return true
        return true
      }
    },
    // modify the session object
    async session({ session }) {
      // a. get user from db
      // b. assign uid to session
      // c. return session
      return session
    },
  },
}

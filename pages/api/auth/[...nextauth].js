import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaAdapter } from '../../../helpers/prisma-adapter'
import jwt from 'jsonwebtoken'
import axios from 'axios'

async function prismaQuery (data) {
  return axios.post(`${process.env.API_URL}/prisma`, data)
    .then(res => {
      return res.data
    })
    .catch(() => null)
}

async function prismaGetUser (id) {
  return axios.get(`${process.env.API_URL}/prisma/user/${id}`)
    .then(res => {
      return res.data
    })
    .catch(() => null)
}

export default NextAuth({
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        const res = await axios.post(process.env.API_URL + '/user/signin', credentials)
        const user = res.data
        if (user) {
          return user
        }
        return null
      }
    })
  ],
  adapter: PrismaAdapter(prismaQuery),
  session: {
    jwt: true
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session (session, token) {
      const user = await prismaGetUser(token.sub)
      token.id = user.id
      session.user = user
      session.token = jwt.sign(token, process.env.JWT_SECRET)
      return session
    },
    async jwt (token, user, account, profile, isNewUser) {
      if (user?.role) {
        token.role = user.role
      }

      if (user?.timezone) {
        token.timezone = user.timezone
      }
      return token
    }
  },
  debug: true
})

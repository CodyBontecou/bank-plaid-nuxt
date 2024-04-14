import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

import sql from '~/server/utils/db'
import PostgresJSAdapter from '../../utils/PostgresJSAdapter'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET || 'secret',
  // @ts-expect-error
  adapter: PostgresJSAdapter(sql),
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: runtimeConfig.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
  ],
})

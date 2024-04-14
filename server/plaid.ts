import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

const runtimeConfig = useRuntimeConfig()

const configuration = new Configuration({
  basePath: PlaidEnvironments.development,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': runtimeConfig.PLAID_CLIENT_ID,
      'PLAID-SECRET': runtimeConfig.PLAID_DEVELOPMENT_SECRET_KEY,
    },
  },
})

export const plaidClient = new PlaidApi(configuration)

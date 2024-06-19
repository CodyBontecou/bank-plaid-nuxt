import { Account } from '~/client/src/schema/accounts'
import { plaidClient } from '~/server/plaid'
import sql from '~/server/utils/db'

export default defineEventHandler(async () => {
  try {
    const accounts = await sql<Account[]>`
      SELECT *
      FROM accounts
      WHERE id = '1'
    `

    const account = accounts[0]

    if (account.plaid_access_token) {
      const accountsResponse = await plaidClient.accountsGet({
        access_token: account.plaid_access_token,
      })

      return accountsResponse.data
    }

    return 'Weird'
  } catch (error) {
    console.log(error)
    return 'error'
  }
})

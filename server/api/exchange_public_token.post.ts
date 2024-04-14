import { plaidClient } from '../plaid'

export default defineEventHandler(async event => {
  // TODO: Get logged in user info

  const body = await readBody(event)
  const publicToken = body.publicToken
  try {
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    })

    const accessToken = response.data.access_token
    const itemId = response.data.item_id

    // TODO: Add values to logged in user's DB table

    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    })

    return accountsResponse.data
  } catch (error) {
    console.log(error)
  }
})

import { RemovedTransaction, Transaction, TransactionsSyncRequest } from 'plaid'
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
      let cursor = null
      const allData = { added: [], modified: [], removed: [], nextCursor: [] }
      // New transaction updates since "cursor"

      let hasMore = true
      // Iterate through each page of new transaction updates for item
      while (hasMore) {
        const request: TransactionsSyncRequest = {
          access_token: account.plaid_access_token,
          cursor: cursor,
        }
        const response = await plaidClient.transactionsSync(request)
        const data = response.data
        // Add this page of results
        allData.added = allData.added.concat(data.added)
        allData.modified = allData.modified.concat(data.modified)
        allData.removed = allData.removed.concat(data.removed)
        hasMore = data.has_more
        // Update cursor to the next cursor
        allData.nextCursor = data.next_cursor
        console.log(data)
      }
      // Persist cursor and updated data
      // database.applyUpdates(itemId, added, modified, removed, cursor)

      return allData
    }

    return 'Weird'
  } catch (error) {
    console.log(error)
    return 'error'
  }
})

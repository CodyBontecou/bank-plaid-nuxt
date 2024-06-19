export const name = 'add plaid info to account'
export const description = `
  accessToken and itemID's should enable persistent Plaid usage
`

export async function action(sql) {
  await sql`
    ALTER TABLE accounts
    ADD COLUMN plaid_access_token VARCHAR(255),
    ADD COLUMN plaid_item_id VARCHAR(255);
  `
}

export interface Account {
  id: number
  userId: number
  type: string
  provider: string
  providerAccountId: string
  refresh_token?: string
  access_token?: string
  expires_at?: number
  id_token?: string
  scope?: string
  session_state?: string
  token_type?: string
  plaid_access_token: string
  plaid_item_id: string
}

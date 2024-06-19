import { CountryCode, LinkTokenCreateRequest, Products } from 'plaid'
import { plaidClient } from '../plaid'

export default defineEventHandler(async () => {
  // redirect_uri needs to be updated based on ngrok generated url.
  // This uri also needs to be updated in web interface: https://dashboard.plaid.com/developers/api
  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: '808',
    },
    client_name: 'Testaroonie',
    products: ['auth'] as Products[],
    language: 'en',
    redirect_uri:
      'https://a41e-2603-800c-2401-51f3-8819-7417-22b-5fed.ngrok-free.app',
    country_codes: ['US'] as CountryCode[],
  }

  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(request)
    return createTokenResponse.data
  } catch (error) {
    console.log(error)
    return 'error'
  }
})

import postgres from 'postgres'

const sql = postgres({
  database: 'bank-plaid-nuxt',
  transform: {
    undefined: null,
  },
})

export default sql

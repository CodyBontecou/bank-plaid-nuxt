<script lang="ts" setup>
import { computed } from 'vue'
import usePlaidLink from '~/composables/usePlaidLink'
import type {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
} from '~/composables/usePlaidLink/types'

interface CreateLinkTokenResponse {
  expiration: string
  link_token: string
  request_id: string
}

const { data } = await useFetch<CreateLinkTokenResponse>(
  '/api/create_link_token',
  {
    method: 'POST',
  }
)

const token = computed(() => {
  if (!data.value) {
    return ''
  }
  return data.value.link_token
})

const onSuccess: PlaidLinkOnSuccess = async (publicToken, metadata) => {
  const { data } = await useFetch('/api/exchange_public_token', {
    method: 'POST',
    body: JSON.stringify({ publicToken }),
  })

  console.log('data: ', data)
}

const config = computed(() => {
  const config: PlaidLinkOptions = {
    token: token.value,
    onSuccess,
  }
  return config
})

const { open, ready } = usePlaidLink(config)
</script>

<template>
  <button :disabled="!ready" @click="open">Connect a bank account</button>
</template>

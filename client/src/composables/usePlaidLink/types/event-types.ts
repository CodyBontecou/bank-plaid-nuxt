export type PlaidEventName =
  | 'BANK_INCOME_INSIGHTS_COMPLETED'
  | 'CLOSE_OAUTH'
  | 'CONNECT_NEW_INSTITUTION'
  | 'ERROR'
  | 'EXIT'
  | 'FAIL_OAUTH'
  | 'HANDOFF'
  | 'IDENTITY_VERIFICATION_START_STEP'
  | 'IDENTITY_VERIFICATION_PASS_STEP'
  | 'IDENTITY_VERIFICATION_FAIL_STEP'
  | 'IDENTITY_VERIFICATION_PENDING_REVIEW_STEP'
  | 'IDENTITY_VERIFICATION_CREATE_SESSION'
  | 'IDENTITY_VERIFICATION_RESUME_SESSION'
  | 'IDENTITY_VERIFICATION_PASS_SESSION'
  | 'IDENTITY_VERIFICATION_FAIL_SESSION'
  | 'IDENTITY_VERIFICATION_PENDING_REVIEW_SESSION'
  | 'IDENTITY_VERIFICATION_OPEN_UI'
  | 'IDENTITY_VERIFICATION_RESUME_UI'
  | 'IDENTITY_VERIFICATION_CLOSE_UI'
  | 'MATCHED_SELECT_INSTITUTION'
  | 'MATCHED_SELECT_VERIFY_METHOD'
  | 'OPEN'
  | 'OPEN_MY_PLAID'
  | 'OPEN_OAUTH'
  | 'SEARCH_INSTITUTION'
  | 'SELECT_AUTH_TYPE'
  | 'SELECT_BRAND'
  | 'SELECT_DEGRADED_INSTITUTION'
  | 'SELECT_DOWN_INSTITUTION'
  | 'SELECT_FILTERED_INSTITUTION'
  | 'SELECT_INSTITUTION'
  | 'SKIP_SUBMIT_PHONE'
  | 'SUBMIT_ACCOUNT_NUMBER'
  | 'SUBMIT_CREDENTIALS'
  | 'SUBMIT_DOCUMENTS'
  | 'SUBMIT_DOCUMENTS_ERROR'
  | 'SUBMIT_DOCUMENTS_SUCCESS'
  | 'SUBMIT_MFA'
  | 'SUBMIT_PHONE'
  | 'SUBMIT_ROUTING_NUMBER'
  | 'TRANSITION_VIEW'
  | 'VERIFY_PHONE'
  | 'VIEW_DATA_TYPES'

export type PlaidViewName =
  | 'ACCEPT_TOS'
  | 'CONNECTED'
  | 'CONSENT'
  | 'CREDENTIAL'
  | 'DATA_TRANSPARENCY'
  | 'DATA_TRANSPARENCY_CONSENT'
  | 'DOCUMENTARY_VERIFICATION'
  | 'ERROR'
  | 'EXIT'
  | 'KYC_CHECK'
  | 'LOADING'
  | 'MATCHED_CONSENT'
  | 'MATCHED_CREDENTIAL'
  | 'MATCHED_MFA'
  | 'MFA'
  | 'NUMBERS'
  | 'OAUTH'
  | 'RECAPTCHA'
  | 'RISK_CHECK'
  | 'SCREENING'
  | 'SELECT_ACCOUNT'
  | 'SELECT_AUTH_TYPE'
  | 'SELECT_BRAND'
  | 'SELECT_INSTITUTION'
  | 'SELECT_SAVED_ACCOUNT'
  | 'SELECT_SAVED_INSTITUTION'
  | 'SELFIE_CHECK'
  | 'SUBMIT_PHONE'
  | 'UPLOAD_DOCUMENTS'
  | 'VERIFY_PHONE'
  | 'VERIFY_SMS'

export type PlaidSelection =
  | 'phoneotp'
  | 'password'
  | 'flow_type_manual'
  | 'flow_type_instant'
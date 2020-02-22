import { RSAA } from 'redux-api-middleware'
import { LIMIT_PER_PAGE, API_KEY } from '../utils'
import ActionTypes from '../constants'

// eslint-disable-next-line import/prefer-default-export
export const loadListings = (start = 1) => ({
  [RSAA]: {
    endpoint: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${LIMIT_PER_PAGE}&start=${start}`,
    headers: { 'X-CMC_PRO_API_KEY': API_KEY },
    method: 'GET',
    types: [
      ActionTypes.LISTINGS_LOAD_REQUEST,
      ActionTypes.LISTINGS_LOAD_SUCCESS,
      ActionTypes.LISTINGS_LOAD_FAILURE,
    ],
  },
})

import Numeral from 'numeral'
import ActionTypes from '../constants'

const initialState = {
  data: [],
  meta: {
    isLoading: false,
    next: 0,
  },
}

/* eslint import/prefer-default-export: 0 */
export function deListing(state = initialState, action) {
  const { type, payload = {} } = action

  switch (type) {
    case ActionTypes.LISTINGS_LOAD_REQUEST: {
      return {
        data: state.data,
        meta: {
          ...state.meta,
          isLoading: true,
        },
      }
    }
    case ActionTypes.LISTINGS_LOAD_FAILURE: {
      return {
        data: state.data,
        meta: {
          ...state.meta,
          isLoading: false,
        },
      }
    }
    case ActionTypes.LISTINGS_LOAD_SUCCESS: {
      const { data } = payload

      const newData = [
        ...state.data,
        ...data.map(res => ({
          name: res.name,
          symbol: res.symbol,
          price: res.quote?.USD?.price,
          priceHR: Numeral(res.quote?.USD?.price).format('0,0.00'),
          cmcRank: res.cmc_rank
        })),
      ]

      return {
        data: newData,
        meta: {
          isLoading: false,
          next: newData.length + 1,
        },
      }
    }
    default:
      break
  }

  return state
}

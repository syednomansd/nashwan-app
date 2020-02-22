import { deListing as reducer } from '../../src/reducers'
import ActionTypes from '../../src/constants'

const INITIAL_STATE = {
  data: [],
  meta: {
    isLoading: false,
    next: 0,
  },
}

const PAYLOAD = {
  data: [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      quote: {
        USD: { price: 55452 },
      },
      cmc_rank: 3,
    },
  ],
}

describe('deListing reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle LISTINGS_LOAD_REQUEST', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: ActionTypes.LISTINGS_LOAD_REQUEST,
      })
    ).toEqual({
      data: [],
      meta: {
        isLoading: true,
        next: 0,
      },
    })
  })

  it('should handle LISTINGS_LOAD_FAILURE', () => {
    expect(
      reducer(
        { data: ['test'], meta: { isLoading: true, next: 20 } },
        {
          type: ActionTypes.LISTINGS_LOAD_FAILURE,
        }
      )
    ).toEqual({
      data: ['test'],
      meta: {
        isLoading: false,
        next: 20,
      },
    })
  })

  it('should handle LISTINGS_LOAD_SUCCESS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: ActionTypes.LISTINGS_LOAD_SUCCESS,
        payload: PAYLOAD,
      })
    ).toEqual({
      data: [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 55452,
          priceHR: '55,452.00',
          cmcRank: 3
        },
      ],
      meta: {
        isLoading: false,
        next: 2,
      },
    })
  })
})

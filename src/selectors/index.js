import { createSelector } from 'reselect'

// eslint-disable-next-line import/prefer-default-export
export const getListings = createSelector(
  state => state.deListing,
  deListing => deListing
)

import React from 'react'
import renderer from 'react-test-renderer'
import { ListRow } from '../../src/components/ListRow'

const DATA = {
  index: 22,
  symbol: 'BTC',
  name: 'Bitcoin',
  price: '333.22'
}

test('renders correctly empty component', () => {
  const component = <ListRow />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders with data', () => {
  const component = <ListRow {...DATA} />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

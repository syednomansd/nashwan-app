import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { ListRow, ROW_HEIGHT } from '../../components/ListRow'
import { LIMIT_PER_PAGE } from '../../utils'
import { loadListings } from '../../actions'
import { getListings } from '../../selectors'

class ListScreen extends Component {
  componentDidMount() {
    this.props.loadListings()
  }

  keyExtractor = item => `${item.cmcRank}-${item.symbol}`

  getItemLayout = (dataa, index) => ({
    length: ROW_HEIGHT + StyleSheet.hairlineWidth,
    offset: (ROW_HEIGHT + StyleSheet.hairlineWidth) * index,
    index,
  })

  handleEndReached = () => {
    const { deListing } = this.props

    if (
      deListing.meta.isLoading ||
      deListing.data.length === 0 ||
      deListing.data.length % LIMIT_PER_PAGE !== 0
    ) {
      return
    }

    this.props.loadListings(deListing.meta.next)
  }

  renderItem = ({ item }) => (
    <ListRow
      index={item.cmcRank}
      symbol={item.symbol}
      name={item.name}
      price={item.priceHR}
    />
  )

  renderSeparator = () => <View style={styles.separator} />

  renderFooter = () => {
    const { deListing } = this.props
    if (!deListing.meta?.isLoading) {
      return null
    }
    return <ActivityIndicator animating size="large" />
  }

  render() {
    const { deListing } = this.props

    return (
      <FlatList
        data={deListing.data}
        renderItem={this.renderItem}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.1}
        keyExtractor={this.keyExtractor}
        getItemLayout={this.getItemLayout}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

ListScreen.navigationOptions = {
  title: 'Nashwan App',
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eeeeee',
  },
})

const mapStateToProps = createStructuredSelector({ deListing: getListings })
const mapDispatchToProps = { loadListings }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen)

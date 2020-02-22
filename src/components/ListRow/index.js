import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

export const ROW_HEIGHT = 50

const Row = ({ index, name, price, symbol = '' }) => (
  <View style={styles.container}>
    <Text style={styles.index}>{index})</Text>
    <FastImage
      style={styles.dummyImage}
      source={{ uri: `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/200` }}
      resizeMode={FastImage.resizeMode.contain}
    />
    <View style={styles.dataContainer}>
      <View style={styles.spaceBetween}>
        <Text style={styles.topText}>{name} - <Text style={styles.bottomText}>{symbol}</Text></Text>
        <Text style={styles.topText}>{price}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dataContainer: {
    justifyContent: 'center',
    flex: 1,
    height: 44,
  },
  spaceBetween: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
  },
  bottomText: {
    color: '#747474',
    fontSize: 14,
  },
  index: {
    width: 24,
    color: '#858585',
    fontSize: 12,
  },
  topText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dummyImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#efefef',
  },
})

export const ListRow = React.memo(Row)

import { createAppContainer, createStackNavigator } from 'react-navigation'
import ListScreen from '../screens/ListScreen'

const navStack = createStackNavigator({
  ListScreen,
})

export default () => createAppContainer(navStack)

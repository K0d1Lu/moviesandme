import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/search'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: 'Recherche',
    })
  }
}, {
  initialRouteName: "Search"
})

export default createAppContainer(SearchStackNavigator)

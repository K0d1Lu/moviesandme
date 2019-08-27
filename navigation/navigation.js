import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/search'
import FilmDetails from '../components/filmDetails'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: 'Recherche',
    })
  },
  FilmDetails: {
    screen: FilmDetails
  } 
}, {
  initialRouteName: "Search"
})

export default createAppContainer(SearchStackNavigator)

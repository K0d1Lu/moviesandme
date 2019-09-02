import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/search'
import Favorites from '../components/favorites'
import FilmDetails from '../components/filmDetails'

import { Image, StyleSheet } from 'react-native'

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

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => <Image source={require('../images/ic_search.png')} style={styles.icons} />
    }
    
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => <Image source={require('../images/ic_favorite.png')} style={styles.icons} />
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    showLabel: false, // On masque les titres
    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }
})

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)

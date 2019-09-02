import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { displayLoading } from './loader';
import { getFilmDetails, getImageFromApi } from '../api/TMDBApi';

import moment from 'moment';
import numeral from 'numeral';

class filmDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    getFilmDetails(this.props.navigation.state.params.filmId).then(film => {
      this.setState({
        film,
        loading: false
      })
    })
  }

  _toggleFavorite(value) {
    const ACTION = { type: 'TOGGLE_FAVORITE', value};
    this.props.dispatch(ACTION);
  }

  /**
   * Display all movie's genres
   *
   * @param {Array} genres - array of objects with genres
   * @returns {String} formatted genres' string
   */
  _formatArrays(items) {
    return items.map(i => i.name).join(' / ')
  }

  _displayLoading = displayLoading.bind(this);

  _displayFavoriteImage(id) {
    let sourceImage = require('../images/ic_favorite.png')

    if (!this.props.favoritesFilms.find(i => i.id === id)) {
      sourceImage = require('../images/ic_favorite_border.png')
    }

    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }

  _displayMovie() {
    const { film } =  this.state;
    if (film) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.poster_path) }}
          />
          <Text style={styles.title}>
            {film.title}
          </Text>
          <Image />
          <TouchableOpacity title='Ajouter aux favoris' onPress={() => this._toggleFavorite(film) } >
            {this._displayFavoriteImage(film.id)}
          </TouchableOpacity>
          <Text style={styles.synopsis}>
            {film.overview}
          </Text>
          <Text>
            <Text style={styles.bold}>
              Sorti le :
            </Text>
            {moment(new Date(film.release_date)).format('DD/MM/YYYY')}
          </Text>
          <Text>
            <Text style={styles.bold}>
              Note :
            </Text>
             {film.vote_average} / 10</Text>
          <Text>
            <Text style={styles.bold}>
              Nombre de votes :
            </Text>
             {film.vote_count}</Text>
          <Text>
            <Text style={styles.bold}>
              Budget :
            </Text>
            {numeral(film.budget).format('0,0[.]00 $')}
          </Text>
          <Text>
            <Text style={styles.bold}>
              Genre(s) :
            </Text>
             {this._formatArrays(film.genres)}</Text>
          <Text>
            <Text style={styles.bold}>
              Companie(s) :
            </Text>
             {this._formatArrays(film.production_companies)}</Text>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading('film_loader')}
        {this._displayMovie()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 10
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: 180,
    margin: 5,
    paddingLeft: 0
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10,
    marginTop: 10
  },
  favorite_container: {
    alignItems: 'center'
  },
  favorite_image: {
    height: 40,
    width: 40
  },
  synopsis: {
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 10
  },
  bold: {
    fontWeight: 'bold'
  }
})

const mapStateToProps = state => {
  return { favoritesFilms } = state
}

export default connect(mapStateToProps)(filmDetails)
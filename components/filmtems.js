import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { getImageFromApi } from '../api/TMDBApi';

export default class filmItem extends Component {

  _displayFavoriteImage() {
    let sourceImage = require('../images/ic_favorite.png')
    let style = styles.favorite_image;

    if (!this.props.favorite) {
      style = styles.display_none;
    }

    return (
      <Image
        style={style}
        source={sourceImage}
      />
    )
  }

  render() {
    const { film, displayDetailForFilm } = this.props;

    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path) }}
        />
        <View style={styles.info_container}>
          <View style={styles.header_container}>
            {this._displayFavoriteImage()}
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
            <Text style={styles.overview} numberOfLines={6}>{film.overview}</Text>
            <Text style={styles.release}>{film.release_date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    borderColor: '#000000',
    borderWidth: 1,
    margin: 10
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  info_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flexDirection: "row",
    flex: 3,
    height: 40
  },
  title_text: {
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    fontWeight: 'bold',
    fontSize: 15
  },
  favorite_image: {
    height: 15,
    width: 15
  },
  display_none: {
    display: 'none'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  release: {
    textAlign: 'right',
    fontSize: 14
  }
})
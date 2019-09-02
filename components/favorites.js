import React, { Component } from 'react'
import { connect } from 'react-redux';
import FilmList from './filmList';

class Favorites extends Component {
  render() {
    return (
      <FilmList data={this.props.favoritesFilms} onEndReached={() => null } navigation={this.props.navigation} donotDisplayFavs={true} />
    )
  }
}

const mapStateToProps = state => {
  return { favoritesFilms } = state
}

export default connect(mapStateToProps)(Favorites)

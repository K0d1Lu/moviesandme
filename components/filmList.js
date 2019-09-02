import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import FilmItem from './filmtems';

class FilmList extends Component {
  constructor(props) {
    super(props)
    this.state = { films: [] }
  }

  _keyExtractor = (item, index) => index + item.id.toString();

  _displayDetailForFilm = filmId => this.props.navigation.navigate('FilmDetails', { filmId });

  _isFav(id) {
    if (this.props.donotDisplayFavs || !this.props.favoritesFilms.find(i => i.id === id)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={ this._keyExtractor }
        renderItem={({item}) => <FilmItem film={item} favorite={this._isFav(item.id)} displayDetailForFilm={this._displayDetailForFilm} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => this.props.onEndReached()}
      />
    )
  }
}

const mapStateToProps = state => {
  return { favoritesFilms } = state
}

export default connect(mapStateToProps)(FilmList)
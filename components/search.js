import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import FilmList from './filmList';
import { displayLoading } from './loader';
import { getFilmSearch } from '../api/TMDBApi';

class Search extends Component {
  constructor(props) {
    super(props);
    this.query = '';
    this.state = { defaultText: '', loading: false };
  }

  _changeText(text) {
    this.query = text
    this.textHasChanged = true;
  }

  _updateFilms(force) {
    if (!this.query || (this.page === this.maxPage && !this.textHasChanged) || (!this.textHasChanged && !force)) return;

    if (this.textHasChanged) {
      this.page = 1;
      this.maxPage = null;
      this.textHasChanged = false;
      this.setState({ films: []});
    }

    this.setState({ loading: true})

    getFilmSearch(this.query, this.page)
      .then( data => {
        this.setState({
          films: [...this.state.films, ...data.results],
          loading: false,
          defaultText: data.results.length ? '' : 'Acun résultat'
        })

        if (!this.maxPage) this.maxPage = data.total_pages;
        if (this.page !== this.maxPage) this.page++;
      })
  }

  _displayLoading = displayLoading.bind(this);

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={text => this._changeText(text) }
          onSubmitEditing={() => this._updateFilms()}
        />
        <Button title='Rechercher' onPress={() => this._updateFilms() }/>
        <Text>{this.state.defaultText}</Text>
        {this._displayLoading('search_loader')}
        <FilmList data={this.state.films} onEndReached={() => this._updateFilms(true)} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 40
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 130,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
});



const mapStateToProps = state => {
  return { favoritesFilms } = state
}

export default connect(mapStateToProps)(Search)
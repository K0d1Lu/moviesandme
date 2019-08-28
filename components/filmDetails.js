import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { displayLoading } from './loader';
import { getFilmDetails } from '../api/TMDBApi';

export default class filmDetails extends Component {
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

  _displayLoading = displayLoading.bind(this);

  _displayMovie() {
    if (this.state.film) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.film.title}</Text>
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
  },
  scrollview_container: {
    flex: 1
  }
})
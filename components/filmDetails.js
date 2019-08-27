import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class filmDetails extends Component {
  render() {
    const { filmId } = this.props.navigation.state.params;
    
    return (
      <View style={styles.main_container}>
        <Text>{`Film detail ${filmId}`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
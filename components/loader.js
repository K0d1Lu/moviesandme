import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export function displayLoading(classname) {
  if (this.state.loading) {
    return (
      <View style={styles[classname]}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  search_loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 130,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  film_loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
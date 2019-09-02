import React, { Component } from 'react';
import { View, Button, Animated, StyleSheet, Platform, PanResponder, Dimensions } from 'react-native'
import { Easing } from 'react-native-reanimated';

// Plus complet
// https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5047156-realisez-des-developpements-specifiques

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topPosition: new Animated.Value(0),
      panTop: 0,
      panLeft: 0
    }

    const {height, width} = Dimensions.get('window');

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        const touches = evt.nativeEvent.touches;
        if (touches.length === 1) {
          this.setState({
            panTop: touches[0].pageY - height/2,
            panLeft: touches[0].pageX - width/2
          })
        }
      }
    })
  }

  _animate() {
    Animated.sequence([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        }
      )
    ]).start()
  }

  // For animations:
  // https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/4959606-ameliorez-votre-application-avec-des-animations
  render() {
    return (
      <View style={styles.main_container}>
        <Button title='Anim' onPress={() => this._animate() }/>
        <View style={styles.animated_container}>
          <Animated.View style={[styles.subview_container, { top: this.state.topPosition }]} />
        </View>
        <View
          style={styles.pan_container}
        >
          <View {...this.panResponder.panHandlers} style={[styles.pan, { top: this.state.panTop }]}>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 40
  },
  animated_container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'blue'
      },
      android: {
        backgroundColor: 'red'
      }
    }),
    height: Platform.OS === 'ios' ? 100 : 100,
    width: Platform.OS === 'ios' ? 50 : 100
  },
  pan_container: {
    marginTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pan: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  }
})
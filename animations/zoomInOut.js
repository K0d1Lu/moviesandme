import React, { Component } from 'react'
import { TouchableOpacity, Animated } from 'react-native'

// Good animation tuto :
// https://blog.pusher.com/animation-react-native-part-1/
export default class ZoomInOut extends Component {
  constructor(props) {
    super(props)

    this.scaleValue = new Animated.Value(0);

    const cardScale = this.scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2]
    });

    this.state = {
      transform: [{scale: cardScale}]
    }
  }

  componentDidUpdate() {
    this.scaleValue.setValue(0);

    Animated.spring(
      this.scaleValue,
      {
        toValue: 1
      }
    ).start( () => {
      Animated.spring(
        this.scaleValue,
        {
          toValue: 0
        }
      )
      .start()
    })
  }

  render() {
    return (
      <Animated.View style={{ transform: this.state.transform }} >
        {this.props.children}
      </Animated.View>
    )
  }
}
/**
 * React Native Starter: TTS
 * https://github.com/joshbuchea/react-native-starter-tts
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// react-native-speech
//
// usage: https://github.com/naoufal/react-native-speech#usage
//
// library needs to be linked by following steps 1 & 2 at:
// https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content
var Speech = require('react-native-speech');

class StarterTTS extends React.Component {

  speak() {
    Speech.speak({
      text: 'React Native Speech is awesome!  I\'m going to use it in my next project.',
      voice: 'en-US'
    })
    .then(started => {
      console.log('Speech started');
    })
    .catch(error => {
      console.log('You\'ve already started a speech instance.');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          StarterTTS
        </Text>
        <Text style={styles.instructions} onPress={this.speak}>
          Press to Speak
        </Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StarterTTS', () => StarterTTS);

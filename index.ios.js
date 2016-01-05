/**
 * React Native Starter: TTS
 * https://github.com/joshbuchea/react-native-starter-tts
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  SliderIOS,
  Text,
  TextInput,
  View,
} = React;

// react-native-speech
//
// usage: https://github.com/naoufal/react-native-speech#usage
//
// library needs to be linked by following steps 1 & 2 at:
// https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content
var Speech = require('react-native-speech');

var voiceMap = {
  'ar-SA': {locale: 'ar-SA', name: 'Arabic (Saudi Arabia)'},
  'zh-CN': {locale: 'zh-CN', name: 'Chinese (China)'},
  'zh-HK': {locale: 'zh-HK', name: 'Chinese (Hong Kong SAR China)'},
  'zh-TW': {locale: 'zh-TW', name: 'Chinese (Taiwan)'},
  'cs-CZ': {locale: 'cs-CZ', name: 'Czech (Czech Republic)'},
  'da-DK': {locale: 'da-DK', name: 'Danish (Denmark)'},
  'nl-BE': {locale: 'nl-BE', name: 'Dutch (Belgium)'},
  'nl-NL': {locale: 'nl-NL', name: 'Dutch (Netherlands)'},
  'en-AU': {locale: 'en-AU', name: 'English (Australia)'},
  'en-IE': {locale: 'en-IE', name: 'English (Ireland)'},
  'en-ZA': {locale: 'en-ZA', name: 'English (South Africa)'},
  'en-GB': {locale: 'en-GB', name: 'English (United Kingdom)'},
  'en-US': {locale: 'en-US', name: 'English (United States)'},
  'fi-FI': {locale: 'fi-FI', name: 'Finnish (Finland)'},
  'fr-CA': {locale: 'fr-CA', name: 'French (Canada)'},
  'fr-FR': {locale: 'fr-FR', name: 'French (France)'},
  'de-DE': {locale: 'de-DE', name: 'German (Germany)'},
  'el-GR': {locale: 'el-GR', name: 'Greek (Greece)'},
  'he-IL': {locale: 'he-IL', name: 'Hebrew (Israel)'},
  'hi-IN': {locale: 'hi-IN', name: 'Hindi (India)'},
  'hu-HU': {locale: 'hu-HU', name: 'Hungarian (Hungary)'},
  'id-ID': {locale: 'id-ID', name: 'Indonesian (Indonesia)'},
  'it-IT': {locale: 'it-IT', name: 'Italian (Italy)'},
  'ja-JP': {locale: 'ja-JP', name: 'Japanese (Japan)'},
  'ko-KR': {locale: 'ko-KR', name: 'Korean (South Korea)'},
  'no-NO': {locale: 'no-NO', name: 'Norwegian (Norway)'},
  'pl-PL': {locale: 'pl-PL', name: 'Polish (Poland)'},
  'pt-BR': {locale: 'pt-BR', name: 'Portuguese (Brazil)'},
  'pt-PT': {locale: 'pt-PT', name: 'Portuguese (Portugal)'},
  'ro-RO': {locale: 'ro-RO', name: 'Romanian (Romania)'},
  'ru-RU': {locale: 'ru-RU', name: 'Russian (Russia)'},
  'sk-SK': {locale: 'sk-SK', name: 'Slovak (Slovakia)'},
  'es-MX': {locale: 'es-MX', name: 'Spanish (Mexico)'},
  'es-ES': {locale: 'es-ES', name: 'Spanish (Spain)'},
  'sv-SE': {locale: 'sv-SE', name: 'Swedish (Sweden)'},
  'th-TH': {locale: 'th-TH', name: 'Thai (Thailand)'},
  'tr-TR': {locale: 'tr-TR', name: 'Turkish (Turkey)'}
};

class StarterTTS extends React.Component {

  constructor(props) {
    super(props);
    this.speak = this.speak.bind(this);
    this.state = {
      voices: [],
      rate: 0.1,
      text: ''
    };
  }

  componentDidMount() {
    this.getVoices();
  }

  getVoices() {

    Speech.supportedVoices()
      .then(locales => {
        console.log(locales); // ["ar-SA", "en-ZA", "nl-BE", "en-AU", "th-TH", ...]
        locales.forEach(function( locale ) {
          if ( voiceMap[locale] ) {
            console.log( voiceMap[locale].name );
          }
        });
      });

  }

  speak() {

    Speech.speak({
      text: this.state.text,
      voice: 'en-US',
      rate: this.state.rate
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
        <SliderIOS
          style={styles.slider}
          minimumValue={0.1}
          maximumValue={1.0}
          value={this.state.rate}
          onValueChange={(value) => this.setState({rate: value})} />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
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
    padding: 10
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
  slider: {
    height: 20,
    width: 300,
    margin: 6
  }
});

AppRegistry.registerComponent('StarterTTS', () => StarterTTS);

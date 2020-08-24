import { StatusBar } from 'expo-status-bar';
import React, { createRef,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView, WebViewNavigation  } from 'react-native-webview';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import CookieManager from '@react-native-community/cookies';
const App = () => {

  return (
    <WebView
      source={{ uri: 'https://yogability.org.au/users/sign_in' }}
      mixedContentMode="compatibility"
      startInLoadingState={true}
      style={styles.iphone}

    />
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iphone: {
    ...ifIphoneX({ marginTop: 35 }),
  }
});

import WebView from 'react-native-webview';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';

export default function Web() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://uk_staging.skilloverview.com'}}
        javaScriptCanOpenWindowsAutomatically={true}
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
        onShouldStartLoadWithRequest={() => true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

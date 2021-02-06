/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View, Text, Button, Alert, BackHandler} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

import * as DefOS from './libs/defOS';
import {cc, ccc} from './libs/mxlib';
const Flex1 = {flex: 1};
const BR = () => <Text> </Text>;

let objWebView: WebView;
export const App = () => {
  cc('-'.repeat(55))
  ccc('In App().');
  React.useEffect(() => {
    ccc('In useEffect()');
  });
  const _info = `API: ${DefOS.andAPIlvl()}, Android ${DefOS.andVer()}`
  return (
    <View style={styles.MainView}>
      <Text style={styles.TextHeader}>r05, L26. WebView tests.</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Text style={styles.TextInfo}>({_info})</Text>
        <Button title="Exit" onPress={BackHandler.exitApp}/>
      </View>
      <View style={styles.WebViewSt}>
        <WebView
          ref={(obj: WebView) => {objWebView = obj;}}
          source={{html}}
          //scalesPageToFit={false}
          javaScriptEnabled={true}
          //domStorageEnabled={true}
          //mixedContentMode="always"
          //setDomStorageEnabled={true}
          //injectedJavaScript="document.body.style.userSelect = 'none';"
          onMessage={(e: WebViewMessageEvent) => {
            cc('In onMessage(e)');
            cc(e.nativeEvent.data);
          }}
        />
      </View>
    </View>
  );
};

//--------------------------------------------------------------------------------------------------
const _htmlines = (n: number): string => {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += i + '. html line added.<br/>\n';
  }
  return res;
}

const html = `
<html>
<head>
  <meta charset="utf-8" />
  <meta name="theme-color" content="#000000" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>L1U. WebView tests</title>
</head>
<script>
  function _onTest2() {
    var content_tag = document.getElementById('content_tag');
    content_tag.style.color = 'red';
  }
  function _onTest3() {
    window.scrollTo(0, 22);
  }
  function _alert() {
    if (alert !== null) {
      alert("Hi there 2.");
    } else {
      _onTest2();
    }
  }
  function _onBScroll() {
    var body_tag = document.getElementById('body_tag');
    var counter_tag = document.getElementById('counter_tag');
    counter_tag.innerHTML = body_tag.scrollTop;
  }
</script>
<body id='body_tag' style='background-color:lightgreen' onload='_onLoad();' onscroll='_onBScroll();' >
  r03, L26. WebView tests.
  <br/>
  <button onclick='_alert()'>Test alert</button> &nbsp;&nbsp;&nbsp;&nbsp;
  <button onclick='_onTest2();'>Test2</button> &nbsp;&nbsp;&nbsp;&nbsp;
  <button onclick='window.scrollTo(0, 231);'>Go 231</button>
  <hr/>
  <div id='content_tag' style='font-size:14px; color:blue;'>
    ${_htmlines(12)}
    <hr/>
    <div id='counter_tag' style='font-size:22px; color:red;'>0</div>
    <button onclick='window.scrollTo(0, 0);'>Go top</button>
    <hr/>
    ${_htmlines(41)}
  </div>
</body>
</html>
`;

//--------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  WebViewSt: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  MainView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'cyan',
    borderColor: 'red',
    borderWidth: 0,
  },
  TextHeader: {
    fontSize: 24,
    color: 'blue',
    fontWeight: '700',
    fontFamily: 'serif',
  },
  TextInfo: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  TextBold: {
    fontWeight: '700',
  },
});

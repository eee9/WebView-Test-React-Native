/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View, Text, Button, Alert, BackHandler} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

import * as DefOS from './libs/defOS';
import {cc, ccc, LL} from './libs/mxlib';

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
  //cc(' ==> ' + LL + LL + html + LL + LL + ' <== ' + LL);
  return (
    <View style={styles.MainView}>
      <Text style={styles.TextHeader}>r07, L26. WebView tests.</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Text style={styles.TextInfo}>({_info})</Text>
        <Button title="    Exit    " onPress={BackHandler.exitApp}/>
      </View>
      <View style={styles.WebViewSt}>
        <WebView
          ref={(obj: WebView) => {objWebView = obj;}}
          source={{html: _html2}}
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
const _htmlines = (qual: number, from = 1): string => {
  let res = '';
  const to = from + qual;
  for (let i = from; i <= to; i++) {
    res += i + '. html line added.<br/>\n';
  }
  return res;
}

const _html2 = `
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
  function _goNew() {
    var body_tag = document.getElementById('body_tag');
    if (body_tag.scrollTo) {
      body_tag.scrollTo({top: 123});
    } else {
      window.scrollTo(0, 21);
      _onTest2();
      alert('body_tag.scrollTo() not found.')
    }
  }
  function _goTo2a() {
    var _element = document.getElementById('goto2');
    if (_element.scrollIntoView) {
      _element.scrollIntoView();
    } else {
      window.scrollTo(0, 15);
      _onTest2();
      alert('goto2.scrollIntoView() not found.')
    }
  }
  function _goTo2b() {
    var _element = document.getElementById('goto2');
    _element.scrollIntoView(false);
  }
  function _goTo2c() {
    var _element = document.getElementById('goto2');
    _element.scrollIntoView({block: "end"});
  }
  function _goTo2d() {
    var _element = document.getElementById('goto2');
    _element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  function _alert() {
    if (alert) {
      alert("Hi there 2.");
    } else {
      _onTest2();
    }
  }
  function _onBScroll() {
    var body_tag = document.getElementById('body_tag');
    var counter_tag = document.getElementById('counter_tag');
    counter_tag.innerHTML = Math.round(body_tag.scrollTop);
  }
</script>
<body id='body_tag' style='background-color:lightgreen' onscroll='_onBScroll();' >
  r07, L26. WebView tests.
  <br/>
  <button onclick='_alert()'>Test alert</button> &nbsp;
  <button onclick='_onTest2();'>Do red</button> &nbsp;
  <button onclick='window.scrollTo(0, 231);'>Go 231</button> &nbsp;
  <button onclick='_goNew();'>New go 123</button><br/>
  <button onclick='_goTo2a();'>Go to 2 ()</button> &nbsp;
  <button onclick='_goTo2b();'>Go to 2 false</button> &nbsp;
  <button onclick='_goTo2c();'>Go to 2 end</button> &nbsp;
  <button onclick='_goTo2d();'>Go to 2 ...</button> &nbsp;
  <hr/>
  <div id='content_tag' style='font-size:14px; color:blue;'>

${_htmlines(14)}

<hr/>
<div id='counter_tag' style='font-size:22px; color:red;'>0</div>
<button onclick='window.scrollTo(0, 0);'>Go top</button>
<hr/>

${_htmlines(25, 100)}


<hr/>
<button id='goto2' onclick='window.scrollTo(0, 0);'>Go top 2</button>
<hr/>

${_htmlines(75, 200)}

  </div>
</body>
</html>
`;

const _html1 = `
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
  function _goNew() {
    var body_tag = document.getElementById('body_tag');
    if (body_tag.scrollTo) {
      body_tag.scrollTo({top: 123});
    } else {
      window.scrollTo(0, 21);
      _onTest2();
      alert('body_tag.scrollTo() not found.')
    }
  }
  function _alert() {
    if (alert) {
      alert("Hi there 2.");
    } else {
      _onTest2();
    }
  }
  function _onBScroll() {
    var body_tag = document.getElementById('body_tag');
    var counter_tag = document.getElementById('counter_tag');
    counter_tag.innerHTML = Math.round(body_tag.scrollTop);
  }
</script>
<body id='body_tag' style='background-color:lightgreen' onload='_onLoad();' onscroll='_onBScroll();' >
  r04, L26. WebView tests.
  <br/>
  <button onclick='_alert()'>Test alert</button> &nbsp;&nbsp;&nbsp;&nbsp;
  <button onclick='_onTest2();'>Do red</button> &nbsp;&nbsp;&nbsp;&nbsp;
  <button onclick='window.scrollTo(0, 231);'>Go 231</button> &nbsp;&nbsp;&nbsp;&nbsp;
  <button onclick='_goNew();'>New go 123</button>
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

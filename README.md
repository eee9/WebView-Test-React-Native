
L2+
React Native app for testing WebView on diffrent APIs.

L26 /a.
Need more tests for HTML alert 'cause
doesn't work on next devices/emulators:
  device api 22 (Cube)
  emulator api 21
  emulator api 22

works on next devices/emulators:
  device api 21 (Samsung)
  device api 23 (Meizu)
  device api 25 (Xiaomi 4X)
  emulator api 23
  emulator api 28
  emulator api 29
  emulator api 30

L26 /b.
Test of HTML body_tag.scrollTo({top: position})
doesn't work on:
  device api 22 (Cube)
  emulator api 21
  emulator api 22
  emulator api 23

works on:
  device api 25 (Xiaomi 4X)
  device api 21 (Samsung)
  emulator api 28
  emulator api 29
  emulator api 30

L26 /c.
Test of HTML element.scrollIntoView(...)
Seems it works everywhere. Tested on:
  device api 22 (Cube)
  emulator api 21
  emulator api 22
  emulator api 23
  emulator api 28
behavior: "smooth" isn't on:
  device api 23 (Meizu)
  device api 22 (Cube)
  emulators <= api 23
but works on:
  device api 21 (Samsung)

                      | alert | scr1 | scr2 | smooth
Devices:              |       |      |      |
  api 21 (Samsung)    |   +   |  +   |  +   |  +
  api 22 (Cube)       |   -   |  -   |  +   |  -
  api 23 (Maizu)      |   -   |  +   |  +   |  -
  api 25 (Xiaomi 4X)  |   +   |  +   |  +   |  +
  api 28 (Android TV) |   ?   |  ?   |  ?   |  ?
Emulators:            |       |      |      |
  api 21              |   -   |  -   |  +   |  -
  api 22              |   -   |  -   |  +   |  -
  api 23              |   -   |  +   |  +   |  -
  api 28              |   +   |  +   |  +   |  +
  api 29              |   +   |  +   |  +   |  +
  api 30              |   +   |  +   |  +   |  +

Result apks:
5 190 502 app-arm64-v8a-release.apk
4 846 043 app-armeabi-v7a-release.apk
5 470 715 app-x86_64-release.apk
5 574 979 app-x86-release.apk
